<template lang="pug">
v-app(v-if="plot")
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(@click="$router.back()")
      v-icon {{ icons.mdiArrowLeft}}
    v-toolbar-title  {{ plot.id}} {{ plot.name }} 
    v-spacer
    v-menu(bottom)
      template(v-slot:activator="{on, attrs}")
        v-btn(dark icon v-bind="attrs" v-on="on")
          v-icon {{ icons.mdiDotsVertical }}
      v-list
        v-list-item(link :to="{name:'地圖預覽', params: {plotid: plotid}}")
          v-list-item-avatar(size="24")
            v-icon {{ icons.mdiEye}}
          v-list-item-title 地圖預覽
        v-list-item(link :to="{name:'歷年鳥種清單', params: {plotid: plotid}}")
          v-list-item-avatar(size="24")
            v-icon {{ icons.mdiFormatListBulleted}}
          v-list-item-title 歷年鳥種清單
        v-divider
        v-list-item(link @click="RemovePlot")
          v-list-item-avatar(size="24")
            v-icon {{icons.mdiDelete}}
          v-list-item-title 刪除樣區
  v-main
    v-card.mx-auto(flat)
      v-list(dense, three-line)
        template(v-for="item in plot_dtl")
          v-list-item(:key="item.id" link  @click="edit(item)")
            v-list-item-avatar.white--text(color="blue-grey" size="36") {{item.pno}}
            v-list-item-content
              v-list-item-title 
                v-chip.mr-2(small) {{ item.lng }}
                v-chip.mr-2(small) {{ item.lat }}
              v-list-item-subtitle
                v-chip.mr-2(small v-if="item.loc1" color="light-green" dark) {{item.loc1}} {{plottype[item.loc1]}}
                v-chip.mr-2(small v-if="item.loc2" color="light-green" dark) {{item.loc2}} {{plottype[item.loc2]}}
              v-list-item-subtitle
                v-chip.mr-2(small v-if="item.loc3" color="light-green" dark) {{item.loc3}}
                v-chip.mr-2(small v-if="item.water" color="light-green" dark) {{item.water}}={{watertype[item.water]}}
          v-divider
    v-dialog(v-model="dialog")
      v-card 
        v-card-title.white--text(class="blue-grey lighten-1") {{ editplot.id }}
        v-card-text 
          v-container(fluid)
            v-row
              v-col(cols="12")
                v-select(:items="idnamelist(plottype)", label='棲地類型(主要)' item-text="name", item-value="id" v-model='editplot.loc1' dense, menu-props="auto")
              v-col(cols="12")
                v-select(:items="idnamelist(plottype)", label='棲地類型(次要)' item-text="name", item-value="id" v-model='editplot.loc2' dense, menu-props="auto")
              v-col(cols="12")
                v-text-field(label="棲地類型(其他說明)"  v-model='editplot.loc3' dense, menu-props="auto")
              v-col(cols="12")
                v-select(label="棲地類型(小水體)" :items="idnamelist(watertype)", item-text="name", item-value="id" v-model='editplot.water' dense, menu-props="auto")
        v-divider
        v-card-actions
          v-btn(@click="dialog=false" text color="error") 取消  
          v-spacer          
          v-btn( text color="green" @click="Save") 存檔
            

</template>
<script>
import {
  mdiArrowLeft,
  mdiPencil,
  mdiDelete,
  mdiEye,
  mdiDotsVertical,
  mdiFormatListBulleted
} from '@mdi/js'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Plotdtl',
  data: () => ({
    icons: {
      mdiArrowLeft,
      mdiPencil,
      mdiDelete,
      mdiEye,
      mdiDotsVertical,
      mdiFormatListBulleted
    },
    plotid: '',
    dialog: false,
    editplot: ''
  }),
  computed: {
    ...mapState(['plottype', 'watertype']),
    ...mapGetters({
      plot: 'getPlotSelected',
      plot_dtl: 'getPlot_dtl',
      bbs_log: 'getBbs_logFiltered',
      bbs_log_dtl: 'getBbs_log_dtlFiltered',
      bird_log: 'getBbs_log_birdFiltered'
    })
  },
  created() {
    this.plotid = this.$route.params.plotid
    this.$store.dispatch('plotSelect', { id: this.plotid })
    this.$store.dispatch('plot_dtlSetFilter', { plot: this.plotid })
    this.$store.dispatch('plot_dtlSetFilter', { plot: this.plotid })

    //this.$store.dispatch('plot_dtlSetSort', { sort: 'pno' })
  },
  methods: {
    idnamelist(obj) {
      return Object.entries(obj).map(item => ({
        id: item[0],
        name: item[0] + ' ' + item[1]
      }))
    },

    edit(item) {
      this.editplot = Object.assign({}, item)
      this.dialog = true
    },
    Save() {
      this.$store.dispatch('plot_dtlUpdate', this.editplot)
      this.dialog = false
    },
    RemovePlot() {
      //清掉LOG
      if (confirm('確定刪除樣區資料, 相關記錄也會一併清除?') == false) {
        return
      }

      this.$store.dispatch('bbs_logSetFilter', { plot: this.plotid })
      this.bbs_log.forEach(log => {
        this.$store.dispatch('bbs_log_dtlSetFilter', { log_id: log.id })
        this.bbs_log_dtl.forEach(dtl => {
          this.$store.dispatch('bbs_log_birdSetFilter', { log_dtl: dtl.id })
          this.bird_log.forEach(bird => {
            this.$store.dispatch('bbs_log_birdRemove', bird)
          })
          this.$store.dispatch('bbs_log_dtlRemove', dtl)
        })

        this.$store.dispatch('bbs_logRemove', log)
      })

      // 清掉子樣區
      this.plot_dtl.forEach(item => {
        this.$store.dispatch('plot_dtlRemove', { id: item.id })
      })
      this.$store.dispatch('plotRemove', { id: this.plot.id })
      this.$router.back()
    }
  }
}
</script>
