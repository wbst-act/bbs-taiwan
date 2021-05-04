<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(to='/')
      v-icon {{ icons.mdiHome}}
    v-toolbar-title 
      span.mr-5 eBird匯入產生器
  v-main
    v-container
      v-row 
        v-col(cols="12")
          v-card        
            v-card-text 
              v-container
                v-row                  
                  v-col(cols="12")
                    v-radio-group(v-model="lang")
                      template(v-slot:label)
                        | 選擇匯出鳥名格式
                      v-radio(value="中文")
                        template(v-slot:label)
                          | 中文俗名
                      v-radio(value="英文")
                        template(v-slot:label)
                          | 英文俗名
                      v-radio(value="學名")
                        template(v-slot:label)
                          | 學名
                  v-col(cols="12")
                    v-file-input(accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                       label="選擇BBS回傳表", 
                       @change="changefile")
      v-row
        v-col(cols="12")
          v-card.mx-auto(flat)
            v-card-text
              v-alert(type="info" border="top" colored-border elevation="2") 
                | 在eBird網站匯入檔案請選擇"eBird 紀錄格式 (Extended)"
          
</template>
<script>
import { mdiHome, mdiDotsVertical, mdiVolumeHigh, mdiMagnify } from '@mdi/js'
import XLSX from 'xlsx'
export default {
  name: 'eBirdExport',
  data: () => ({
    icons: { mdiHome, mdiDotsVertical, mdiVolumeHigh, mdiMagnify },
    plots: {},
    lang: '中文',
    birds: {}
  }),
  async mounted() {
    this.plots = await fetch('/data/bbs_plot.json').then(r => r.json())
    this.birds = await fetch('/data/bbs_bird_2021.json').then(r => r.json())
  },
  methods: {
    changefile(file) {
      if (file) {
        this.loadfile(file)
      }
    },
    loadfile(file) {
      const filename = file.name.split('.')[0] + '_轉ebird record.csv'
      const zeroPad = (num, places) => String(num).padStart(places, '0')
      const reader = new FileReader()
      reader.onload = e => {
        const bstr = e.target.result
        const wb = XLSX.read(bstr, { type: 'binary' })
        const sheetindex = wb.SheetNames.findIndex(item =>
          item.includes('bird')
        )
        if (sheetindex == -1) {
          alert('找不到記錄分頁')
          return
        }
        const ws = wb.Sheets[wb.SheetNames[sheetindex]]
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 })
        data.splice(0, 1)
        let ebirddata = {}
        for (let item of data) {
          if (item.length == 0) {
            break
          }
          if (
            [
              '其他',
              '其他（填於備註欄）',
              '台灣獮猴',
              '台灣獼猴',
              '臺灣獼猴',
              '沒有鳥'
            ].includes(item[0])
          ) {
            continue
          }
          if (item[0].indexOf('XX') == 0 || item[0].indexOf('xx') == 0) {
            item[0] = item[0].slice(2) + '屬'
          }
          let name = 'BBS-' + item[7] + '-' + zeroPad(item[8], 2)
          let date = item[24] + '/' + item[25] + '/' + item[23]
          if (ebirddata[date + ' ' + name]) {
            if (ebirddata[date + ' ' + name]['logs'][item[0]]) {
              ebirddata[date + ' ' + name]['logs'][item[0]] += item[3]
            } else {
              ebirddata[date + ' ' + name]['logs'][item[0]] = item[3]
            }
          } else {
            /*
            let loc
            try {
              if (item[14].includes('TWD97') || item[14].includes('TWD67')) {
                loc = this.twd97_to_latlng(item[15], item[16])
              } else {
                loc = this.convertlatlng(item[15], item[16])
              }
            } catch {
              alert('發生座標轉換問題!!')
              return
            }
            */
            //console.log(this.plots[item[7]].plotdtl, item[7])

            const plot = this.plots[item[7]].plotdtl.findIndex(
              ret => ret.pno == item[8]
            )
            let loc

            //找不找熱點
            if (plot == -1) {
              if (item[14] == 'WGS84/經緯度') {
                if (!isNaN(item[16]) && !isNaN(item[15])) {
                  loc = { lng: item[16], lat: item[15] }
                } else {
                  loc = this.convertlatlng(item[15], item[16])
                }
              } else if (item[15] == 'TWD97/TM2') {
                loc = this.twd97_to_latlng(item[15], item[16])
              } else {
                alert(
                  `${item[6]} 樣點: ${item[8]} 鳥種: ${item[0]}\r\n座標: ${item[14]} ${item[15]} ${item[16]}\r\n座標格式有問題`
                )
                return
              }
            } else {
              // 找到熱點
              loc = this.convertlatlng(
                this.plots[item[7]].plotdtl[plot].lat,
                this.plots[item[7]].plotdtl[plot].lng
              )
            }

            ebirddata[date + ' ' + name] = {
              location: name,
              date: date,
              time: zeroPad(item[21], 2) + ':' + zeroPad(item[22], 2),
              lng: loc.lng,
              lat: loc.lat,
              p: item[17].split(/,|、|，/).length,
              logs: {}
            }
            ebirddata[date + ' ' + name]['logs'][item[0]] = item[3]
          }
        }
        if (Object.entries(ebirddata).length == 0) {
          alert('無鳥記錄,匯出失敗!')
          return
        }
        let sheetdata = []
        for (const name in ebirddata) {
          const item = ebirddata[name]
          for (const name in item['logs']) {
            let birdname
            try {
              if (this.lang == '中文') {
                birdname = this.birds[name].cn
              } else if (this.lang == '英文') {
                birdname =
                  this.birds[name].en == '' ? name : this.birds[name].en
              } else {
                birdname =
                  this.birds[name].sn == '' ? name : this.birds[name].sn
              }
            } catch {
              birdname = name
            }

            sheetdata.push({
              'Common Name': birdname,
              Genus: '',
              Species: '',
              Number: item['logs'][name],
              'Species Comments': '',
              'Location Name': item['location'],
              Latitude: item['lat'],
              Longitude: item['lng'],
              Date: item['date'],
              'Start Time': item['time'],
              'State/Province': '',
              'Country Code': '',
              Protocol: 'stationary',
              'Number of Observers': item['p'],
              Duration: 6,
              'All observations reported?': 'Y',
              'Effort Distance Miles': '',
              'Effort area acres': '',
              'Submission Comments': ''
            })
          }
        }
        const wb2 = XLSX.utils.book_new()
        const ebirdsheet = XLSX.utils.json_to_sheet(sheetdata, {
          skipHeader: true
        })
        XLSX.utils.book_append_sheet(wb2, ebirdsheet, 'recordlist')
        XLSX.writeFile(wb2, filename)
      }
      reader.readAsBinaryString(file)
    },
    convertlatlng($x, $y) {
      let tmpx = $x.split(/°|'|"/)
      let tmpy = $y.split(/°|'|"/)
      return {
        lat:
          parseInt(tmpx[0]) +
          parseInt(tmpx[1]) / 60 +
          parseFloat(tmpx[2]) / 3600,
        lng:
          parseInt(tmpy[0]) +
          parseInt(tmpy[1]) / 60 +
          parseFloat(tmpy[2]) / 3600
      }
    },

    twd97_to_latlng($x, $y) {
      var pow = Math.pow,
        M_PI = Math.PI
      var sin = Math.sin,
        cos = Math.cos,
        tan = Math.tan
      var $a = 6378137.0,
        $b = 6356752.314245
      var $lng0 = (121 * M_PI) / 180,
        $k0 = 0.9999,
        $dx = 250000,
        $dy = 0
      var $e = pow(1 - pow($b, 2) / pow($a, 2), 0.5)

      $x -= $dx
      $y -= $dy

      var $M = $y / $k0

      var $mu =
        $M /
        ($a *
          (1.0 -
            pow($e, 2) / 4.0 -
            (3 * pow($e, 4)) / 64.0 -
            (5 * pow($e, 6)) / 256.0))
      var $e1 =
        (1.0 - pow(1.0 - pow($e, 2), 0.5)) / (1.0 + pow(1.0 - pow($e, 2), 0.5))

      var $J1 = (3 * $e1) / 2 - (27 * pow($e1, 3)) / 32.0
      var $J2 = (21 * pow($e1, 2)) / 16 - (55 * pow($e1, 4)) / 32.0
      var $J3 = (151 * pow($e1, 3)) / 96.0
      var $J4 = (1097 * pow($e1, 4)) / 512.0

      var $fp =
        $mu +
        $J1 * sin(2 * $mu) +
        $J2 * sin(4 * $mu) +
        $J3 * sin(6 * $mu) +
        $J4 * sin(8 * $mu)

      var $e2 = pow(($e * $a) / $b, 2)
      var $C1 = pow($e2 * cos($fp), 2)
      var $T1 = pow(tan($fp), 2)
      var $R1 =
        ($a * (1 - pow($e, 2))) /
        pow(1 - pow($e, 2) * pow(sin($fp), 2), 3.0 / 2.0)
      var $N1 = $a / pow(1 - pow($e, 2) * pow(sin($fp), 2), 0.5)

      var $D = $x / ($N1 * $k0)

      var $Q1 = ($N1 * tan($fp)) / $R1
      var $Q2 = pow($D, 2) / 2.0
      var $Q3 =
        ((5 + 3 * $T1 + 10 * $C1 - 4 * pow($C1, 2) - 9 * $e2) * pow($D, 4)) /
        24.0
      var $Q4 =
        ((61 +
          90 * $T1 +
          298 * $C1 +
          45 * pow($T1, 2) -
          3 * pow($C1, 2) -
          252 * $e2) *
          pow($D, 6)) /
        720.0
      var $lat = $fp - $Q1 * ($Q2 - $Q3 + $Q4)

      var $Q5 = $D
      var $Q6 = ((1 + 2 * $T1 + $C1) * pow($D, 3)) / 6
      var $Q7 =
        ((5 -
          2 * $C1 +
          28 * $T1 -
          3 * pow($C1, 2) +
          8 * $e2 +
          24 * pow($T1, 2)) *
          pow($D, 5)) /
        120.0
      var $lng = $lng0 + ($Q5 - $Q6 + $Q7) / cos($fp)

      $lat = ($lat * 180) / M_PI
      $lng = ($lng * 180) / M_PI

      return {
        lat: $lat,
        lng: $lng
      }
    }
  }
}
</script>
