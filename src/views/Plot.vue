<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(to='/')
      v-icon {{ icons.mdiHome}}
    v-toolbar-title 樣區設定
  v-main
    v-card.mx-auto(flat)
      v-card-text(v-if="plots.length==0" )
        v-alert(type="warning" border="top" colored-border elevation="2") 請先新增樣區
      v-list(v-if="plots")
        template(v-for="item in plots")
          v-list-item(:key="item.id" link :to="{name:'樣點設定', params: {plotid: item.id}}")
            v-list-item-avatar(size="32")
              v-icon(color="blue-grey") {{icons.mdiMapMarker}}
            v-list-item-content
              v-list-item-title 
                span.mr-5 {{ item.id }} 
                span.text-h6 {{ item.name }}
                
          v-divider
                
      v-bottom-sheet(v-model="dialog")
        template(v-slot:activator="{ on, attrs }")
          v-btn(fixed, dark, fab, bottom, right, color="blue-grey", @click="addplot=null;dialog=true;")
            v-icon {{ icons.mdiMapMarkerPlus }}
        v-sheet
          v-toolbar(color="blue-grey ligthen-1" dark dense) 
            v-toolbar-title 新增樣區
          v-container(fluid)
            v-row(v-if="!addplot")
              v-col(cols="8")
                v-autocomplete(v-model='selectplot' :items="bbs_plots" item-text="name" item-value="id", dense, label="選擇樣區")
              v-col(cols="4")
                v-btn(@click="copyplot" color="primary" block) 選取樣區
              v-col(cols="12")
                v-divider            
              v-col(cols="12") 
                a(href="https://sites.google.com/a/birds-tesri.twbbs.org/bbs-taiwan/method-1/yang-qu-ren-yang-ji-shi-zi-xun" target="_blank") 如果樣區資料有異動, 請手動上傳BBS Taiwan樣區資訊及鳥類名錄.xls
              v-col(cols="12")
                v-file-input(accept="application/x-iwork-keynote-sffnumbers,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" @change="onchange" label='BBS Taiwan樣區資訊及鳥類名錄')
            v-row(v-if="addplot")
              v-col(cols="6") {{ addplot.city }}{{ addplot.town }} 
              v-col(cols="6") {{ addplot.name }}
              v-col(cols="6") {{ addplot.id }}
              v-col(cols="6") 樣點數{{ addplot.plotdtl.length }}
              //
                v-col(cols="6")
                  v-select(:items="idnamelist(plottype)", label='棲地類型(主要)' item-text="name", item-value="id" v-model='addplot.loc1', menu-props="auto")
                v-col(cols="6")
                  v-select(:items="idnamelist(plottype)", label='棲地類型(次要)' item-text="name", item-value="id" v-model='addplot.loc2', menu-props="auto")
                v-col(cols="6")
                  v-text-field(label="棲地類型(其他說明)"  v-model='addplot.loc3')
                v-col(cols="6")
                  v-select(label="棲地類型(小水體)" :items="idnamelist(watertype)", item-text="name", item-value="id" v-model='addplot.water', menu-props="auto")
              v-col(cols="12")
                v-btn(block color="primary" @click="add") 新增
</template>
<script>
import {
  mdiPlus,
  mdiPencil,
  mdiArrowRight,
  mdiMapMarker,
  mdiMapMarkerPlus,
  mdiHome
} from '@mdi/js'
import { mapGetters, mapActions, mapState } from 'vuex'
//import { bbs_taiwan_plots } from '../store/bbs_plot.js'
import XLSX from 'xlsx'
export default {
  name: 'Plot',
  data: () => ({
    icons: {
      mdiPlus,
      mdiPencil,
      mdiArrowRight,
      mdiMapMarker,
      mdiMapMarkerPlus,
      mdiHome
    },
    bbs_taiwan_plots: {},
    dialog: false,
    addplot: null,
    selectplot: ''
  }),
  computed: {
    ...mapGetters({
      plots: 'getPlot',
      plot_dtl: 'getPlot_dtl',
      plot_select: 'getPlotSelected'
    }),
    ...mapState(['plottype', 'watertype', 'static_data_path']),
    bbs_plots() {
      return Object.entries(this.bbs_taiwan_plots).map(item => ({
        id: item[0],
        name: item[0] + ' ' + item[1].name
      }))
    }
  },
  async mounted() {
    this.$store.dispatch('plotSetFilter', {})
    console.log('static:', this.static_data_path)
    this.bbs_taiwan_plots = await fetch(
      this.static_data_path + 'bbs_plot.json'
    ).then(r => r.json())
  },
  methods: {
    ...mapActions(['plotSelect', 'plot_dtlSetFilter']),
    idnamelist(obj) {
      return Object.entries(obj).map(item => ({
        id: item[0],
        name: item[0] + ' ' + item[1]
      }))
    },
    add() {
      this.plotSelect({ id: this.addplot.id })
      if (this.plot_select) {
        this.dialog = false
        return
      }
      this.$store.dispatch('plotAdd', {
        id: this.addplot.id,
        name: this.addplot.name,
        city: this.addplot.city,
        town: this.addplot.town,
        loc1: this.addplot.loc1,
        loc2: this.addplot.loc2,
        loc3: this.addplot.loc3,
        water: this.addplot.water
      })

      this.addplot.plotdtl.forEach(item => {
        let data = {
          id: item.id,
          pno: item.pno,
          plot: this.addplot.id,
          lng: item.經度,
          lat: item.緯度,
          loc1: this.addplot.loc1,
          loc2: this.addplot.loc2,
          loc3: this.addplot.loc3,
          water: this.addplot.water,
          create_date: new Date().valueOf()
        }
        this.$store.dispatch('plot_dtlAdd', data)
      })

      this.dialog = false
      //this.$router.push('/')
    },
    copyplot() {
      if (this.selectplot == '') return
      //console.log(this.bbs_taiwan_plots[this.selectplot])
      const plot = Object.assign({
        id: this.selectplot,
        city: this.bbs_taiwan_plots[this.selectplot].city,
        town: '',
        name: this.bbs_taiwan_plots[this.selectplot].name,
        plotdtl: [],
        loc1: '',
        loc2: '',
        loc3: '',
        water: ''
      })
      this.bbs_taiwan_plots[this.selectplot].plotdtl.forEach(item => {
        plot['plotdtl'].push({
          id: item.id,
          pno: item.pno,
          緯度: item.lat,
          經度: item.lng
        })
      })
      this.addplot = plot
    },
    onchange(e) {
      //console.log(e)
      //let files = e.target.files
      let fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          var rawdata = ev.target.result
          const wb = XLSX.read(rawdata, { type: 'binary' })

          const sheet = wb.Sheets['樣區資訊']
          const data = XLSX.utils.sheet_to_json(sheet, {
            header: [
              '樣區編號2',
              '樣點代碼',
              '鄉鎮',
              '樣區編號',
              '樣區名稱',
              'X',
              'Y',
              'X2',
              'Y2'
            ]
          })
          if (!data) {
            alert('上傳檔案格式錯誤!')
          }
          let plot = {}
          plot['city'] = data[3]['樣點代碼']
          plot['town'] = data[3]['鄉鎮']
          plot['id'] = data[3]['樣區編號']
          plot['name'] = data[3]['樣區名稱']
          plot['plotdtl'] = []
          data
            .filter(
              item =>
                item['樣區編號2'] == plot['id'] &&
                item['樣區編號'] == plot['name']
            )
            .forEach(item =>
              plot['plotdtl'].push({
                id: item['樣區名稱'],
                pno: parseInt(item['樣點代碼']),
                經度: item['X'],
                緯度: item['Y']
              })
            )
          this.addplot = plot
          this.addplot.loc1 = ''
          this.addplot.loc2 = ''
          this.addplot.loc3 = ''
          this.addplot.water = ''
        } catch (e) {
          alert(e)
          return
        }
      }
      fileReader.readAsBinaryString(e)
    }
  }
}
</script>
