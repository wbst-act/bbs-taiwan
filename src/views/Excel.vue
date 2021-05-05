<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(to='/')
      v-icon {{ icons.mdiHome}}
    v-toolbar-title 合併匯出
  v-main
    v-card.mx-auto(flat)
      v-card-text(v-if="bbs_logs.length==0")
        v-alert(type="success" border="top" colored-border elevation="2") 
          | 先去野外記錄,季末再來這裡交作業。  
      v-list(v-if="bbs_logs" two-line)
        v-list-item-group(v-model="selection" multiple)
          template(v-for="(item,index) in bbs_logs")
            v-list-item(:key="item.id" :value="item.id" active-class="")
              template(v-slot:default="{ active }")
                v-list-item-action
                  v-checkbox(:input-value="active")
                v-list-item-content
                  v-list-item-title 
                    span.text-h6.mr-5 {{getname(item.plot, 'name')}}
                    span.subtitle-1.mr-5 第 {{item.lno}} 次
                  v-list-item-subtitle 
                    | {{ item.date }} 
                v-list-item-action
                  v-icon(:color="selection.indexOf(item.id)==-1?'grey':'green'") {{icons.mdiDownload}}
            v-divider(:key="`divider-${index}`")
      v-card-text(v-if="bbs_logs.length>0")
        v-alert(type="warning" border="top" colored-border elevation="2") 
          | 建議每次調查完畢先匯出檔案備份, 避免血汗記錄意外消失。      
      //
        v-snackbar(v-model="email" color="success" centered timeout="-1" vertical) 
          | 匯出成功, 回傳回
          a(:href="`mailto:bbsintw@gmail.com?subject=BBS回傳表_${year}${username}&body=請附上附件 BBS回傳表_${year}${username}.xlsx`" target="_blank") 特生中心點我 
          | ，記得夾上EXCEL檔案
          template(v-slot:action="{ attrs }")
            v-btn(dark text v-bind="attrs" @click="email=false") CLOSE
      v-dialog(v-model="email" persistent) 
        v-sheet
          v-toolbar.white--text(class="success" dense)
            v-toolbar-title 匯出成功
            v-spacer
            v-btn(icon @click="email=false" dark small)
              v-icon {{ icons.mdiClose }}
          v-container(fluid)
            v-row
              v-col.text-center(cols=12)
                | 回傳
                a(:href="`mailto:bbsintw@gmail.com?subject=BBS回傳表_${year}${username}&body=請附上附件 BBS回傳表_${year}${username}.xlsx`" target="_blank") 特生中心點我 
                | ，記得夾上EXCEL檔案

              
      v-dialog(v-model="dialog")
        template(v-slot:activator="{ on, attrs }")
          v-btn(fixed, dark, fab, bottom, right, color="blue-grey", @click="dialog=true"  v-show="selection.length>0")
            v-icon {{ icons.mdiMicrosoftExcel }}
        v-card(dense)
          v-toolbar.white--text(class="blue-grey lighten-1" dense)  設定匯出調查員姓名
          v-card-text
            v-container(fluid)              
              v-row
                v-col(cols="12")
                  v-text-field(v-model="username" label="調查員姓名")
          v-card-actions
            v-spacer
            v-btn(dark, text, color="green", @click="download") 匯出Excel
</template>
<script>
import { mdiMicrosoftExcel, mdiDownload, mdiHome, mdiClose } from '@mdi/js'
import { mapGetters, mapActions } from 'vuex'
import XLSX from 'xlsx'

export default {
  name: 'Excel',
  data: () => ({
    icons: { mdiMicrosoftExcel, mdiDownload, mdiHome, mdiClose },
    username: localStorage.getItem('username'),
    dialog: false,
    selection: [],
    email: false,
    year: new Date().getFullYear()
  }),
  computed: {
    ...mapGetters({
      plots: 'getPlot',
      bbs_logs: 'getBbs_log',
      bbs_log: 'getBbs_logSelected',
      plot: 'getPlotSelected',
      plot_dtl: 'getPlot_dtl',
      bbs_log_dtl: 'getBbs_log_dtl',
      bird_log: 'getBbs_log_bird',
      isSelection: 'isBbs_logInSelection'
    })
  },
  mounted() {
    this.$store.dispatch('bbs_logSetFilter', {})
    this.$store.dispatch('bbs_logSetSort', { sort: 'create_date' })
    this.$store.dispatch('bbs_log_dtlSetSort', { sort: 'create_date' })
    this.$store.dispatch('bbs_log_birdSetSort', { sort: 'create_date' })
    this.bbs_logs.forEach(item => this.selection.push(item.id))
  },
  methods: {
    ...mapActions(['bbs_logToggleSelection']),
    idnamelist(obj) {
      return Object.entries(obj).map(item => ({
        id: item[0],
        name: item[0] + ' ' + item[1]
      }))
    },
    getname(id, field) {
      const data = this.plots.find(item => item.id == id)
      return data[field]
    },
    bird_log_export(bbs_log_id) {
      const zeroPad = (num, places) => String(num).padStart(places, '0')
      let data = []
      let photo = []
      this.$store.dispatch('bbs_logSelect', { id: bbs_log_id })
      this.$store.dispatch('plotSelect', { id: this.bbs_log.plot })

      this.$store.dispatch('bbs_log_dtlSetFilter', { log_id: this.bbs_log.id })
      this.$store.dispatch('plot_dtlSetFilter', { plot: this.plot.id })
      if (this.bbs_log.lno == 1) {
        this.plot_dtl.forEach(dtl => {
          photo.push({
            攝影編號A: dtl.plot + '_' + zeroPad(dtl.pno, 2) + '_01',
            攝影編號B: dtl.plot + '_' + zeroPad(dtl.pno, 2) + '_02',
            攝影編號C: dtl.plot + '_' + zeroPad(dtl.pno, 2) + '_03',
            攝影編號D: dtl.plot + '_' + zeroPad(dtl.pno, 2) + '_04',
            樣區編號: dtl.plot,
            樣點編號: dtl.pno,
            '調查旅次\n編號': this.bbs_log.lno
          })
        })
      }

      //birdata
      this.bbs_log_dtl.forEach(logheader => {
        const dtl = this.plot_dtl.find(dtl => dtl.id == logheader.plot_dtl)

        this.$store.dispatch('bbs_log_birdSetFilter', {
          log_dtl: logheader.id
        })

        if (logheader.log_time == undefined) {
          return
        }
        const logtime = new Date(logheader.log_time)
        this.bird_log.forEach(log => {
          data.push({
            鳥種: log.bird,
            時段: log.period,
            距離: log.distance,
            數量: log.qty,
            結群: log.group ? 'Y' : 'N',
            備註: log.memo,
            地點: this.plot.name,
            樣區編號: this.plot.id,
            樣點編號: dtl.pno,
            '棲地類型\n(主要)': dtl.loc1,
            '棲地類型\n(次要)': dtl.loc2,
            '棲地類型\n(其他說明)': dtl.loc3,
            '棲地類型\n(小水體)': dtl.water,
            '樣區海拔(m)': '',
            座標系統: 'WGS84/經緯度',
            X座標: dtl.lng,
            Y座標: dtl.lat,
            調查者: this.bbs_log.member,
            '調查旅次\n編號': this.bbs_log.lno,
            天氣: logheader.weather,
            風速: parseInt(logheader.wind),
            '開始時間\n(時)': this.$moment(logtime).format('HH'),
            '開始時間\n(分)': this.$moment(logtime).format('mm'),
            年: this.$moment(logtime).format('YYYY'),
            月: this.$moment(logtime).format('MM'),
            日: this.$moment(logtime).format('DD')
          })
        })

        if (this.bird_log.length == 0) {
          data.push({
            鳥種: '沒有鳥',
            時段: 'X',
            距離: 'X',
            數量: 0,
            結群: 'N',
            備註: '',
            地點: this.plot.name,
            樣區編號: this.plot.id,
            樣點編號: dtl.pno,
            '棲地類型\n(主要)': dtl.loc1,
            '棲地類型\n(次要)': dtl.loc2,
            '棲地類型\n(其他說明)': dtl.loc3,
            '棲地類型\n(小水體)': dtl.water,
            '樣區海拔(m)': '',
            座標系統: 'WGS84/經緯度',
            X座標: dtl.lng,
            Y座標: dtl.lat,
            調查者: this.bbs_log.member,
            '調查旅次\n編號': this.bbs_log.lno,
            天氣: logheader.weather,
            風速: parseInt(logheader.wind),
            '開始時間\n(時)': this.$moment(logtime).format('HH'),
            '開始時間\n(分)': this.$moment(logtime).format('mm'),
            年: this.$moment(logtime).format('YYYY'),
            月: this.$moment(logtime).format('MM'),
            日: this.$moment(logtime).format('DD')
          })
        }
      })
      return { data, photo }
    },
    download() {
      if (this.username) {
        localStorage.setItem('username', this.username)
      }
      let birddata = []
      let photo = []
      this.selection.forEach(id => {
        let ret = this.bird_log_export(id)
        birddata = [...birddata, ...ret.data]
        photo = [...photo, ...ret.photo]
      })
      const birdlsheet = XLSX.utils.json_to_sheet(birddata)
      const photosheet = XLSX.utils.json_to_sheet(photo)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, birdlsheet, 'birddata')
      XLSX.utils.book_append_sheet(wb, photosheet, 'photoID')
      const filename =
        'BBS回傳表_' +
        this.username +
        this.$moment().format('YYYYMMDD') +
        '.xlsx'
      try {
        XLSX.writeFile(wb, filename)
      } catch {
        alert(`${filename}檔案輸出問題!\n請截圖通報BBS團隊`)
      }
      this.dialog = false
      this.email = true
    }
  }
}
</script>
