<template lang="pug">
v-card.mx-auto(flat)
  v-card-text(v-if="bbs_logs.length==0")
    v-alert(type="success" border="top" colored-border elevation="2") 開始進行BBS Taiwan之旅
  v-list(v-if="bbs_logs")
    template(v-for="item in bbs_logs" two-line)
      v-list-item(:key="item.id")
        v-list-item-avatar(@click="editlog(item)" size="24")
          v-icon(color="blue-grey") {{icons.mdiPencil}}        
        v-list-item-content
          v-list-item-title 
            span.text-h6.mr-5 {{getname(item.plot, 'name')}}
            span.subtitle-1.mr-5 第 {{item.lno}} 次
          v-list-item-subtitle 
            | {{ item.date }} 
            
        v-list-item-action
          v-btn(icon color="blue-grey" :to="{name: '子樣區列表',params:{logid: item.id}}")
            v-icon {{icons.mdiArrowRight}}
      v-divider

  v-bottom-sheet(v-model="dialog")
    template(v-slot:activator="{ on, attrs }" v-if="plots.length>0")
      v-btn(fixed, dark, fab, bottom, right, color="blue-grey", @click="addlog")
        v-icon {{ icons.mdiPlus }}
    v-sheet
      v-toolbar(color="blue-grey lighten-1", dark,  dense)
        v-toolbar-title  {{ log.id=='' ? '新增': '編輯'  }}旅次記錄
        v-spacer
        v-btn(icon dark @click="dialog=false")
          v-icon {{ icons.mdiClose}}
      v-container(fluid)
        v-row
          v-col(cols="6")
            v-select(
              label="樣區",
              :items="plots",
              item-text="name",
              item-value="id",
              v-model="log.plot",
              :disabled="log.id!=''",
              dense,
              menu-props="auto"
            )
          v-col(cols="6")
            v-text-field(
              type="date",
              label="調查日期",
              dense,
              v-model="log.date"
            )
          v-col(cols="6")
            v-select(
              :items="idnamelist(wind)",
              item-text="name",
              item-value="id",
              label="風速",
              dense,
              v-model="log.wind",
              menu-props="auto"
            )
          v-col(cols="6")
            v-select(
              :items="idnamelist(weather)",
              item-text="name",
              item-value="id",
              label="天氣",
              dense,
              v-model="log.weather"
            )
          v-col(cols="3")    
            v-select(
              :items="[1,2,3,4,5,6,7,8,9,10,11,12]"
              label="旅次"
              dense
              v-model="log.lno",
              menu-props="auto"
            )
          v-col(cols="9")
            v-text-field(label='參與人員', v-model="log.member", dense)
        v-row 
          v-col(v-if="log.id==''")
              v-btn(block, dark, color="green", @click="createlog") 新增
          v-col(v-if="log.id!=''")
              v-btn(block, dark,color="red", @click="dellog(log.id)") 刪除
          v-col(v-if="log.id!=''")
              v-btn(block, dark,color="green", @click="changelog") 存檔
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { mdiPlus, mdiPencil, mdiArrowRight, mdiClose } from '@mdi/js'
export default {
  name: 'List',
  data: () => ({
    icons: { mdiPlus, mdiPencil, mdiArrowRight, mdiClose },
    loglist: [],
    log: {
      id: '',
      lno: 1,
      date: '',
      weather: '',
      wind: 0,
      member: ''
    },
    dialog: false
  }),
  computed: {
    ...mapState(['weather', 'wind']),
    ...mapGetters({
      plots: 'getPlot',
      bbs_logs: 'getBbs_log',

      bbs_log_dtl: 'getBbs_log_dtl',
      bird_log: 'getBbs_log_bird',
      create_log: 'getBbs_logSelected',
      create_plot: 'getPlotSelected',
      plot_dtl: 'getPlot_dtl'
    })
  },
  mounted() {
    this.$store.dispatch('bbs_logSetFilter', {})
    this.$store.dispatch('bbs_logSetSort', {
      sort: 'create_date',
      reverse: true
    })

    if (this.plots.length == 0) {
      this.$router.push({ name: '樣區設定' })
    }
  },
  methods: {
    ...mapActions(['plot_dtlSetFilter', 'bbs_logAdd']),
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
    newlog() {
      const now = new Date()
      this.log.plot = this.plots[0].id
      this.log.date = this.$moment(now).format('YYYY-MM-DD')
      this.log.weather = 'A'
      this.log.wind = '0'
      this.log.member = ''
      this.log.lno = 1
      this.log.id = ''
    },
    addlog() {
      this.newlog()
      this.dialog = true
    },
    createlog() {
      const now = new Date().valueOf()
      const found = this.bbs_logs.findIndex(
        item =>
          item['plot'] == this.log.plot &&
          item['date'] == this.log.date &&
          item['lno'] == this.log.lno
      )
      if (found > -1) {
        this.dialog = false
        return
      }
      this.log.create_date = now
      this.log.update_date = now
      this.$store.dispatch('bbs_logAdd', this.log)
      this.$store.dispatch('bbs_logSelect', {
        id: this.bbs_logs[0].id
      })
      this.$store.dispatch('plotSelect', { id: this.create_log.plot })
      this.$store.dispatch('plot_dtlSetFilter', { plot: this.create_plot.id })
      this.plot_dtl.forEach(item =>
        this.$store.dispatch('bbs_log_dtlAdd', {
          log_id: this.create_log.id,
          plot_dtl: item.id,
          wind: this.create_log.wind,
          weather: this.create_log.weather,
          create_date: new Date().valueOf(),
          update_date: now
        })
      )
      this.dialog = false
    },
    editlog(log) {
      this.log = Object.assign({}, log)
      this.dialog = true
    },
    changelog() {
      const now = new Date().valueOf()

      this.$store.dispatch('bbs_log_dtlSetFilter', { log_id: this.log.id })
      this.bbs_log_dtl.forEach(dtl => {
        if (dtl.update_date != this.log.update_date) {
          return
        }
        const update_dtl = Object.assign({}, dtl, {
          wind: this.log.wind,
          weather: this.log.weather,
          update_date: now
        })

        this.$store.dispatch('bbs_log_dtlUpdate', update_dtl)
      })
      this.log.update_date = now
      this.$store.dispatch('bbs_logUpdate', this.log)

      this.dialog = false
    },
    dellog() {
      /*
        remove bbs_log_dtl
        remove bbs_log_bird
      */
      if (confirm('確定刪除此記錄?') == false) {
        return
      }
      this.$store.dispatch('bbs_log_dtlSetFilter', { log_id: this.log.id })
      this.bbs_log_dtl.forEach(dtl => {
        this.$store.dispatch('bbs_log_birdSetFilter', { log_dtl: dtl.id })
        this.bird_log.forEach(bird => {
          this.$store.dispatch('bbs_log_birdRemove', bird)
        })
        this.$store.dispatch('bbs_log_dtlRemove', dtl)
      })

      this.$store.dispatch('bbs_logRemove', this.log)
      this.dialog = false
    }
  }
}
</script>
