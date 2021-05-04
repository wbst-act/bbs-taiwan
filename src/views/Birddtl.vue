<template lang="pug">
v-app(v-if="plot_dtl && bbs_log_dtl && birds")
  v-app-bar(app, color="blue-grey", dark,  dense)
    v-app-bar-nav-icon(@click="$router.back()")
      v-icon {{ icons.mdiArrowLeft}}
    v-toolbar-title.mr-2 {{ bbs_log_dtl.plot_dtl }}
    v-btn.mr-2(v-if="bbs_log_dtl.log_time" text @click="clearTime") {{ bbs_log_dtl.log_time| moment('HH:mm')}}
    v-badge.mr-3(:content="timer" v-if="timer>0" :color="timer<180?'blue':'orange'")
      v-icon {{ icons.mdiAlarm }}    
    v-spacer
    v-menu(bottom)
      template(v-slot:activator="{on, attrs}")
        v-btn(dark icon v-bind="attrs" v-on="on")
          v-icon {{ icons.mdiDotsVertical }}
      v-list
        v-list-item(link @click="editdialog=true")
          v-list-item-avatar(size="24")
            v-icon {{ icons.mdiPencil}}
          v-list-item-title 編輯記錄
        v-divider
        v-subheader 排序方式
        v-list-item(link @click="sortby(0)")
          v-list-item-avatar(size="24")
            v-icon(v-show="sort==0") {{ icons.mdiCheck }}
          v-list-item-title 輸入順序
        v-list-item(link @click="sortby(1)")
          v-list-item-avatar(size="24")
            v-icon(v-show="sort==1") {{ icons.mdiCheck }}
          v-list-item-title 時段
        v-list-item(link @click="sortby(2)")
          v-list-item-avatar(size="24")
            v-icon(v-show="sort==2") {{ icons.mdiCheck }}
          v-list-item-title 鳥種
  v-main
    v-card.mx-auto(flat)      
      v-list( dense two-line ref="vlist")
        template(v-for="(item,index) in log_bird")
          v-list-item(:key="item.id" :class="lastupdate==index ? 'light-green lighten-5':  'white'")
            template(v-if="item.period=='A'")
              v-list-item-avatar.white--text(color="blue" size="36" @click="update(index, -1)") {{item.period }}
            template(v-else-if="item.period=='B'")
              v-list-item-avatar.white--text(color="orange" size="36" @click="update(index, -1)") {{item.period }}
            template(v-else)
              v-list-item-avatar.white--text(color="grey" size="36" @click="update(index, -1)") {{item.period }}

            v-list-item-content
              v-list-item-title
                // 鳥名
                //span.text-h6.mr-1 {{ item.bird }}
                template(v-if="birds[item.bird]")
                  v-tooltip(top)
                    template(v-slot:activator="{ on, attrs }")
                      span.text-h6.mr-1(v-bind="attrs" v-on="on") {{ item.bird }}
                    div(v-if="birds[item.bird].en!=''") {{ birds[item.bird].en }} 
                    div(v-if="birds[item.bird].sn!=''") 
                      i {{ birds[item.bird].sn }} 
                    div(v-if="birds[item.bird].es!=''") {{ birds[item.bird].es.join(', ') }}
                  // 簡碼
                  v-chip.mr-1(v-if="birds[item.bird] && birds[item.bird].es.length>0 ", x-small, color='blue-grey', dark) {{ birds[item.bird].es[0]}}
                template(v-else)
                  span.text-h6.mr-1 {{ item.bird }}
                // 數量
                v-chip(:color="item.group?'deep-orange':'green'", dark @click="birdlog_edit(index, item)") {{item.qty }}
              v-list-item-subtitle
                // 距離
                template(v-if="item.distance=='A'")
                  v-chip.mr-3(small, color='light-green lighten-2') {{ distance[item.distance] }}
                template(v-else-if="item.distance=='B'")
                  v-chip.mr-3(small, color='light-green lighten-3') {{ distance[item.distance] }}
                template(v-else-if="item.distance=='C'")
                  v-chip.mr-3(small, color='light-green lighten-4') {{ distance[item.distance] }}
                template(v-else-if="item.distance=='D'")
                  v-chip.mr-3(small, color='light-blue lighten-3') {{ distance[item.distance] }}
                template(v-else)
                  v-chip.mr-3(small, color='grey lighten-3') {{ distance[item.distance] }}
                //結群
                v-chip.mr-3(v-if="item.group" , color="red", dark, small) 結群
                // 註解
                v-chip.mr-3(v-if="item.memo" , color="pink", dark, small) {{ item.memo}}
            v-list-item-action
              v-btn(fab x-small color="green darken-1" dark @click="update(index, 1)")
                v-icon() {{icons.mdiPlus}}
          v-divider
        v-card-text
          v-alert(border="top" colored-border type="info" elevation="2")                          
            v-chip.mr-2(small v-if="plot_dtl.loc1" color="light-green" dark) {{plot_dtl.loc1}} {{plottype[plot_dtl.loc1]}}
            v-chip.mr-2(small v-if="plot_dtl.loc2" color="light-green" dark) {{plot_dtl.loc2}} {{plottype[plot_dtl.loc2]}}
            v-chip.mr-2(small v-if="plot_dtl.loc3" color="light-green" dark) {{plot_dtl.loc3}}
            v-chip.mr-2(small v-if="plot_dtl.water" color="light-green" dark) {{plot_dtl.water}}={{watertype[plot_dtl.water]}}
            v-chip.mr-2(small color="light-blue" dark) {{ wind[bbs_log_dtl.wind]}}
            v-chip.mr-2(small color="light-blue" dark) {{ weather[bbs_log_dtl.weather]}}

    // 編輯環境
    v-dialog(v-model="editdialog" persistent)
      v-sheet(dense)
        v-toolbar.white--text(class="blue-grey lighten-1" dense) 
          v-toolbar-title 編輯環境天氣記錄      
        v-container( fluid )            
          v-row
            v-col(cols="6")
              v-select(:items="idnamelist(wind)", label='風速' item-text="name", item-value="id" v-model='edititem.wind' dense,menu-props="auto")
            v-col(cols="6")
              v-select(:items="idnamelist(weather)", label='天氣' item-text="name", item-value="id" v-model='edititem.weather' dense, menu-props="auto")
            v-col(cols="6")
              v-select(:items="idnamelist(plottype)", label='棲地類型(主要)' item-text="name", item-value="id" v-model='edititem.loc1' dense, menu-props="auto")
            v-col(cols="6")
              v-select(:items="idnamelist(plottype)", label='棲地類型(次要)' item-text="name", item-value="id" v-model='edititem.loc2' dense, menu-props="auto")
            v-col(cols="6")
              v-text-field(label="棲地類型(其他說明)"  v-model='edititem.loc3' dense)
            v-col(cols="6")
              v-select(label="棲地類型(小水體)" :items="idnamelist(watertype)", item-text="name", item-value="id" v-model='edititem.water' dense,menu-props="auto" )
            v-col(cols="12")
              v-alert(type="info" border="top" dense) 風速,天氣,主要棲地必填。
        v-divider
        v-card-actions
          // v-btn(@click="editdialog=false" text color="error") 取消 
          v-spacer          
          v-btn(color="green" @click="Save" dark) 存檔
    
    // 編輯單筆
    v-dialog(v-model="birddialog")      
      v-sheet(v-if="editbird" dense)
        v-toolbar.white--text(class='blue-grey lighten-1' dense) 
          v-toolbar-title 編輯記錄
          v-spacer
          v-btn(icon small dark @click="birddialog=false")
            v-icon {{ icons.mdiClose }}            
        v-container(fluid)           
          v-row
            v-col(cols="12")
              v-autocomplete(v-model='editbird.bird', 
                label='鳥種', 
                :items="birdlist(birds)", 
                item-text='id', 
                itext-value='id',
                :filter="birdFilter", 
                dense, 
                :hint="birds[editbird.bird] && birds[editbird.bird].es.length>0 ?birds[editbird.bird].es.join(', '):''",
                @change="$refs.qty2.focus()")
                template(v-slot:item="data")
                  v-list-item-content
                    v-list-item-title 
                      | {{data.item.id }}
                      span.float-right.text-caption.grey--text {{data.item.name.en }}
            v-col(cols="8")
              v-text-field(v-model='editbird.qty', 
                type='number',
                @input="editbird.group=editbird.qty>=5?true:false", 
                label='數量', 
                dense, 
                hide-details,
                ref="qty2")
            v-col(cols="4")
              v-checkbox(label='結群', v-model='editbird.group', dense)
            v-col(cols="12")
              div 距離 : {{ distance[editbird.distance] }}
              v-btn-toggle(v-model="editbird.distance"  color="deep-purple accent-3" mandatory dense :hint="distance[editbird.distance]")
                template(v-for="(value, key) in distance")
                  v-btn( :key="key" :value='key' v-if="key=='X'? editbird.period=='X' : true ") {{ key}}              
              // 
                v-select(v-model='editbird.distance', label='距離', :items="idnamelist(distance)", item-text='name', item-value='id', dense)
            v-col(cols="12")
              div 時段 : {{ period[editbird.period] }}
              v-btn-toggle(v-model="editbird.period"  color="deep-purple accent-3" mandatory dense)
                v-btn(v-for="(value, key) in period" :key="key" :value='key') {{ key}}
              //
                v-select(v-model='editbird.period', label='時段', :items="idnamelist(period)", item-text='name', item-value='id', dense)
            v-col(cols="12")
              v-text-field(label='註解', v-model='editbird.memo', dense)
        v-divider
        v-card-actions
          v-btn(@click="birdlog_delete(editbird)" color="error" dark) 刪除  
          v-spacer          
          v-btn( color="green" @click="birdlog_update(editbird)" dark) 存檔

          
    v-snackbar(v-model="showtimeout" :timeout="showtime*1000" color="blue-grey" rounded="pill" centered) {{ message }}
    v-snackbar(v-model="addmessage" :timeout="2500" bottom color="blue-grey" rounded="pill")
     | {{ addinfo }}
     template(v-slot:action="{ attrs }")
      v-btn(dark icon v-bind="attrs" @click="addmessage=false")
        v-icon {{ icons.mdiClose }}
    v-bottom-sheet(v-model="dialog")
      template(v-slot:activator="{ on, attrs }")
        template(v-if="bbs_log_dtl.log_time==undefined" )
          v-btn(fixed, dark, fab, bottom, right, color="red",  @click="startlog") 
            v-icon {{ icons.mdiPlay}}
        template(v-else)
          v-btn(fixed, dark, fab, bottom, right, color="orange", @click="addshow")
            v-icon {{ icons.mdiBird }}
      v-sheet
        v-toolbar.white--text(dense class='blue-grey lighten-1')
          v-toolbar-title 新增記錄
          v-spacer
          v-btn(icon dark @click="dialog=false")
            v-icon {{ icons.mdiClose }}
        v-container(fluid)
          //
            v-list(two-line, dense, outlined, v-if="addlog.bird!=''")
              v-list-item
                template(v-if="addlog.period=='A'")
                  v-list-item-avatar.white--text(color="primary" size="36") {{addlog.period }}
                template(v-else-if="addlog.period=='B'")
                  v-list-item-avatar.white--text(color="orange" size="36") {{addlog.period }}
                template(v-else)
                  v-list-item-avatar.white--text(color="grey" size="36") {{addlog.period }}
                v-list-item-content
                  v-list-item-title
                    span.text-h6.mr-1 {{ addlog.bird }} 
                    v-chip.mr-1(v-if="birds[addlog.bird]", x-small, color='blue-grey', dark) {{ birds[addlog.bird]}}
                    v-chip(:color="addlog.group?'deep-orange':'green'", dark) {{addlog.qty }}
                  v-list-item-subtitle
                    template(v-if="addlog.distance=='A'")
                      v-chip.mr-3(small, color='light-green lighten-2') {{ distance[addlog.distance] }}
                    template(v-else-if="addlog.distance=='B'")
                      v-chip.mr-3(small, color='light-green lighten-3') {{ distance[addlog.distance] }}
                    template(v-else-if="addlog.distance=='C'")
                      v-chip.mr-3(small, color='light-green lighten-4') {{ distance[addlog.distance] }}
                    template(v-else-if="addlog.distance=='D'")
                      v-chip.mr-3(small, color='light-blue lighten-3') {{ distance[addlog.distance] }}
                    template(v-else)
                      v-chip.mr-3(small, color='grey lighten-3') {{ distance[addlog.distance] }}
                    v-chip(v-if="addlog.group" , color="red", dark, small) 結群

          v-row
            v-col(cols="12")
              v-autocomplete(v-model='addlog.bird',
                label='鳥種', 
                :items="birdlist(birds)", 
                item-text='id', 
                itext-value='id',
                :filter="birdFilter2", 
                dense, 
                :hint="birds[addlog.bird] && birds[addlog.bird].es.length>0 ? birds[addlog.bird].es.join(', ') :''",
                clearable,
                @change="$refs.qty.focus()")
                template(v-slot:item="data")
                  v-list-item-content
                    v-list-item-title 
                      | {{data.item.id }}
                      span.float-right.text-caption.grey--text {{data.item.name.en }}
            
            v-col(cols="5")
              v-text-field(v-model="addlog.qty", 
                type='number' @input="addlog.group=addlog.qty>=5?true:false",
                label='數量', dense, ref="qty")
            v-col(cols="3")
              v-checkbox(label='結群', v-model='addlog.group', dense)
            v-col(cols="4")
              v-btn(color="green" dark @click='add' block, dense ) 新增
            //
              v-col(cols="4")
                v-select(v-model='addlog.period', label='時段', :items="idnamelist(period)", item-text='name', item-value='id', dense)
            v-col(cols="12")
              div 距離 : {{ distance[addlog.distance] }}
              v-btn-toggle(v-model="addlog.distance"  color="deep-purple accent-3" mandatory dense)
                template(v-for="(value, key) in distance")
                  v-btn( :key="key" :value='key' v-if="key=='X'? addlog.period=='X' : true ") {{ key}}
            v-col(cols="12")              
              div 時段 : {{ period[addlog.period] }}
              v-btn-toggle(v-model="addlog.period"  color="deep-purple accent-3" mandatory dense)
                v-btn(v-for="(value, key) in period" :key="key" :value='key') {{ key}}
            v-col(cols="12")
              v-text-field(label='註解', v-model='addlog.memo', dense)
              // v-select(v-model='addlog.distance', label='距離', :items="idnamelist(distance)", item-text='name', item-value='id', dense)
              //
                v-combobox(v-model='addlog.qty', type='number',
                  @change="addlog.group=addlog.qty>=5?true:false",
                  label='數量',
                  :items="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,40,50,60,70,80,90,100,150,200,250,300,350,400,450,500]", dense)            
            

</template>
<script>
import {
  mdiBird,
  mdiArrowLeft,
  mdiDotsVertical,
  mdiArrowRight,
  mdiAlarm,
  mdiPlay,
  mdiPencil,
  mdiPlus,
  mdiClose,
  mdiCheck
} from '@mdi/js'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Bird-Log-Dtl',

  data: () => ({
    icons: {
      mdiBird,
      mdiArrowLeft,
      mdiDotsVertical,
      mdiArrowRight,
      mdiAlarm,
      mdiPlay,
      mdiPencil,
      mdiPlus,
      mdiClose,
      mdiCheck
    },
    edititem: {
      wind: '',
      weather: '',
      loc1: '',
      loc2: '',
      loc3: '',
      water: ''
    },
    dialog: false,
    editdialog: false,
    timer: -1,
    timeout: -1,
    log_dtl_id: '',
    addlog: {
      bird: '',
      period: 'A',
      qty: '',
      distance: 'A',
      group: false,
      memo: ''
    },
    birddialog: false,
    editbird: null,
    showtimeout: false,
    showtime: 5,
    message: '',
    lastupdate: -1,
    birds: null,
    synth: window.speechSynthesis,
    speech: new window.SpeechSynthesisUtterance(),
    addmessage: false,
    addinfo: '',
    sort: 0
  }),
  computed: {
    ...mapGetters({
      bbs_log_dtl: 'getBbs_log_dtlSelected',
      plot_dtl: 'getPlot_dtlSelected',
      log_bird: 'getBbs_log_bird',
      log_bird_selected: 'getBbs_log_birdSelected'
    }),
    ...mapState([
      'distance',
      'period',
      'plottype',
      'watertype',
      'wind',
      'weather'
    ])
  },
  mounted() {},
  async created() {
    this.birds = await fetch('/data/bbs_bird_2021.json').then(r => r.json())
    this.log_dtl_id = this.$route.params.logid
    this.$store.dispatch('bbs_log_dtlSelect', { id: this.log_dtl_id })
    this.$store.dispatch('plot_dtlSelect', { id: this.bbs_log_dtl.plot_dtl })

    this.$store.dispatch('bbs_log_birdSetFilter', { log_dtl: this.log_dtl_id })
    /*
    this.$store.dispatch('bbs_log_birdSetSort', {
      sort: 'create_date',
      reverse: true
    })
    */
    this.sortby(0)
    this.speech.voice = this.synth
      .getVoices()
      .find(item => item.lang == 'zh-TW')
    const now = new Date().valueOf()
    if ((now - this.bbs_log_dtl.log_time) / 1000 < 360) {
      this.check_time()
    }
    this.edititem.wind = this.bbs_log_dtl.wind
    this.edititem.weather = this.bbs_log_dtl.weather
    this.edititem.loc1 = this.plot_dtl.loc1
    this.edititem.loc2 = this.plot_dtl.loc2
    this.edititem.loc3 = this.plot_dtl.loc3
    this.edititem.water = this.plot_dtl.water

    if (
      this.edititem.wind == '' ||
      this.edititem.weather == '' ||
      this.edititem.loc1 == ''
    )
      this.editdialog = true
  },
  destroyed() {
    clearTimeout(this.timeout)
  },
  methods: {
    sortby(sort) {
      this.sort = sort
      let sortdata = {}
      if (sort == 0) {
        sortdata = { sort: 'create_date', reverse: true }
      } else if (sort == 1) {
        sortdata = { sort: 'period' }
      } else {
        sortdata = { sort: 'bird' }
      }
      this.$store.dispatch('bbs_log_birdSetSort', sortdata)
    },
    idnamelist(obj) {
      return Object.entries(obj).map(item => ({
        id: item[0],
        name: item[0] + ' ' + item[1]
      }))
    },
    birdlist(obj) {
      return Object.entries(obj).map(item => ({ id: item[0], name: item[1] }))
    },
    startlog() {
      const log = Object.assign({}, this.bbs_log_dtl, {
        log_time: new Date().valueOf()
      })
      this.$store.dispatch('bbs_log_dtlUpdate', log)
      this.TextToSpeech(' 樣點' + this.plot_dtl.pno + ', 開始計時')
      this.showtime = 3
      this.message = '樣點' + this.plot_dtl.pno + ', 開始計時'
      this.showtimeout = true
      this.check_time()
    },
    clearTime() {
      if (confirm('確定重新開始調查?\n將會刪除此樣點所有鳥種紀錄')) {
        clearTimeout(this.timeout)
        const log = Object.assign({}, this.bbs_log_dtl, {
          log_time: undefined
        })
        this.$store.dispatch('bbs_log_dtlUpdate', log)
        this.timer = -1
        this.log_bird.forEach(bird => {
          this.$store.dispatch('bbs_log_birdRemove', { id: bird.id })
        })
      }
    },
    check_time() {
      const now = new Date().valueOf()

      const diff = (now - this.bbs_log_dtl.log_time) / 1000

      if (parseInt(diff) == 180) {
        this.TextToSpeech('換B時段')
        this.showtime = 2
        this.message = '換B時段'
        this.showtimeout = true
      }
      if (diff < 360) {
        this.timer = parseInt((now - this.bbs_log_dtl.log_time) / 1000)
        this.timeout = setTimeout(() => this.check_time(), 1000)
      } else {
        this.TextToSpeech('喲喲喲 喲,六分鐘到，請前往下一站。記得拍環境照')
        this.showtimeout = true
        this.message = '六分鐘到，請前往下一站。記得拍環境照。'
        this.timer = -1
      }
    },
    addshow() {
      if (this.timer >= 0 && this.timer <= 180) {
        this.addlog.period = 'A'
      } else if (this.timer > 180) {
        this.addlog.period = 'B'
      } else {
        this.addlog.period = 'X'
      }
      this.addlog.bird = ''
      this.addlog.qty = ''
      this.addlog.distance = 'A'
      this.addlog.group = false
      this.addlog.memo = ''

      this.dialog = true
    },
    add() {
      if (this.addlog.bird == '') {
        return
      }
      this.addlog.qty = this.addlog.qty == '' ? 1 : parseInt(this.addlog.qty)
      if (['台灣獮猴', '台灣獼猴', '臺灣獼猴'].includes(this.addlog.bird)) {
        this.addlog.qty = this.addlog.qty >= 2 ? 2 : 1
        this.addlog.group = this.addlog.qty == 2
      }
      const postdata = Object.assign({}, this.addlog, {
        log_dtl: this.log_dtl_id
      })
      /*
      const found = this.log_bird.findIndex(
        item =>
          item.bird == postdata.bird &&
          item.period == postdata.period &&
          item.group == postdata.group &&
          item.distance == postdata.distance &&
          item.group == false &&
          item.memo == postdata.memo
      )
      if (found == -1) {
        postdata.create_date = new Date().valueOf()
        //新增
        this.$store.dispatch('bbs_log_birdAdd', postdata)
        this.lastupdate = 0
      } else {
        //更新
        this.update(found, postdata.qty)
      }
      */

      //強制新增
      postdata.create_date = new Date().valueOf()
      this.$store.dispatch('bbs_log_birdAdd', postdata)
      if (this.sort == 0) {
        this.lastupdate = 0
        this.$vuetify.goTo(1)
      } else if (this.sort == 1) {
        this.lastupdate = this.log_bird.length - 1
      } else {
        this.lastupdate = -1
      }
      this.addinfo =
        `${this.addlog.bird} ${this.addlog.qty}隻` +
        (this.addlog.group ? '(結群)' : '') +
        ` 距離:${this.distance[this.addlog.distance]} 時段:${
          this.addlog.period
        }`
      this.addmessage = true
      this.addshow()
    },
    update(index, qty) {
      let postdata = Object.assign({}, this.log_bird[index])
      postdata.qty = parseInt(postdata.qty) + qty
      if (['台灣獮猴', '台灣獼猴', '臺灣獼猴'].includes(postdata.bird)) {
        postdata.qty = postdata.qty >= 2 ? 2 : 1
        postdata.group = postdata.qty == 2
      } else if (postdata.group && postdata.qty < 5) {
        postdata.group = false
      }
      // 限制為1隻
      postdata.qty = postdata.qty <= 0 ? 1 : postdata.qty

      this.$store.dispatch('bbs_log_birdUpdate', postdata)
      /*
      if (postdata.group && postdata.qty < 5 && postdata.memo != '台灣獮猴') {
        this.$store.dispatch('bbs_log_birdRemove', { id: postdata.id })
      } else if (postdata.qty == 0) {
        this.$store.dispatch('bbs_log_birdRemove', { id: postdata.id })
      } else {
        this.$store.dispatch('bbs_log_birdUpdate', postdata)
      }
      */
      this.lastupdate = index
    },

    Save() {
      if (
        this.edititem.loc1 == '' ||
        this.edititem.loc1 == '' ||
        this.edititem.weather == ''
      ) {
        return
      }
      const bbs_log_dtl = Object.assign({}, this.bbs_log_dtl, {
        wind: this.edititem.wind,
        weather: this.edititem.weather,
        update_date: new Date().valueOf()
      })
      this.$store.dispatch('bbs_log_dtlUpdate', bbs_log_dtl)

      const plot_dtl = Object.assign({}, this.plot_dtl, {
        loc1: this.edititem.loc1,
        loc2: this.edititem.loc2,
        loc3: this.edititem.loc3,
        water: this.edititem.water
      })
      this.$store.dispatch('plot_dtlUpdate', plot_dtl)
      this.editdialog = false
    },
    birdFilter(item, queryText) {
      let searchText = queryText.toUpperCase()
      return (
        item.id.indexOf(searchText) > -1 ||
        this.FindCodes(item.name['es'], searchText) ||
        (searchText.length > 3 &&
          (item.name['en'].toUpperCase().indexOf(searchText) == 0 ||
            item.name['sn'].toUpperCase().indexOf(searchText) == 0))
      )
    },
    birdFilter2(item, queryText) {
      let qty = parseInt(queryText)
      let searchText = queryText.toUpperCase()
      if (qty > 0) {
        this.addlog.qty = qty
        this.addlog.group = this.addlog.qty >= 5
        searchText = queryText
          .substr(qty.toString().length)
          .trim()
          .toUpperCase()
      } else {
        this.addlog.qty = ''
      }
      return (
        item.id.indexOf(searchText) > -1 ||
        this.FindCodes(item.name['es'], searchText) ||
        (searchText.length > 3 &&
          (item.name['en'].toUpperCase().indexOf(searchText) == 0 ||
            item.name['sn'].toUpperCase().indexOf(searchText) == 0))
      )
    },
    FindCodes(codes, searchText) {
      if (codes.length > 0) {
        return codes.findIndex(item => item.indexOf(searchText) == 0) >= 0
      } else {
        return false
      }
    },
    TextToSpeech(text) {
      this.speech.text = text
      this.synth.speak(this.speech)
    },
    birdlog_edit(index, item) {
      this.$store.dispatch('bbs_log_birdSelect', item)
      this.editbird = Object.assign({}, this.log_bird_selected)
      this.lastupdate = index
      this.birddialog = true
    },
    birdlog_update(editbird) {
      editbird.qty = parseInt(editbird.qty)
      this.$store.dispatch('bbs_log_birdUpdate', editbird)
      /*
      const found = this.log_bird.findIndex(
        item =>
          item.bird == editbird.bird &&
          item.period == editbird.period &&
          item.group == editbird.group &&
          item.distance == editbird.distance &&
          item.group == false &&
          item.memo == editbird.memo &&
          item.id != editbird.id
      )
      editbird.qty = parseInt(editbird.qty)
      if (found == -1) {
        this.$store.dispatch('bbs_log_birdUpdate', editbird)
      } else {
        const postdata = Object.assign({}, this.log_bird[found])
        postdata.qty = parseInt(postdata.qty) + editbird.qty
        this.$store.dispatch('bbs_log_birdUpdate', postdata)
        this.lastupdate = found == 0 ? 0 : found - 1
        this.$store.dispatch('bbs_log_birdRemove', editbird)
      }
      */
      this.birddialog = false
    },
    birdlog_delete(editbird) {
      if (confirm('確定要刪除??')) {
        this.$store.dispatch('bbs_log_birdRemove', { id: editbird.id })
        this.lastupdate = -1
        this.birddialog = false
      }
    }
  }
}
</script>
