<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark,  dense)
    v-app-bar-nav-icon(to="/")
      v-icon {{ icons.mdiArrowLeft}}
    v-toolbar-title(v-if="bbs_log") 
      | {{ plot.name }}
    .subtitle-2.ml-5 {{ bbs_log.date }}
    v-spacer    
    //
      v-btn(icon @click="download")
        v-icon {{icons.mdiMicrosoftExcel}}
  v-main
    v-card.mx-auto(flat)
      v-list(two-line, dense)
        template(v-for="item in bbs_log_dtl")
          v-list-item(:key="item.id" link :to="{name: 'BBS記錄',params:{logid: item.id}}")
            template(v-if="item.log_time")
              template(v-if="(now - item.log_time)<360000")
                v-list-item-avatar(color="red" size="32")
                  v-icon(color="white") {{icons.mdiPlay}}
              template(v-else)
                v-list-item-avatar(color="green" size="32")
                  v-icon(color="white") {{icons.mdiCheck}}
            template(v-else)
              v-list-item-avatar(size="32")
            v-list-item-content
              v-list-item-title
                span.text-h6.mr-2 {{ item.plot_dtl}} 
                template(v-if="item.log_time")
                  span {{item.log_time| moment('MM-DD HH:mm')}}
              v-list-item-subtitle
                v-chip.mr-2(small color="light-blue" dark) {{ wind[item.wind]}}
                v-chip.mr-2(small color="light-blue" dark) {{ weather[item.weather]}}
            v-list-item-action
              v-icon(color="blue-grey") {{icons.mdiAlarm}}
          v-divider
            

    v-bottom-sheet(v-model="dialog")
      template(v-slot:activator="{ on, attrs }")
        v-btn(fixed, dark, fab, bottom, right, color="blue-grey", @click="dialog=true;")
          v-icon {{ icons.mdiCrosshairsGps }}
      v-sheet
        v-container(fluid)
          //
            v-row(v-if="plot_dtl")
              v-col(cols="12")
                v-select(label="檢視樣區" :items="plot_dtl", item-text="id", dense, item-value="id" @change="changecenter", return-object, v-model="adddtl.plot_dtl", menu-props="auto")
          v-row 
            l-map(
              v-if="showMap"
               ref="map" 
              v-resize="onResize"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="min-height: 400px"
              @update:center="centerUpdate"
              @update:zoom="zoomUpdate"
            )
              l-tile-layer(:url="url" :attribution="attribution")
              l-circle(:lat-lng="yourposition", :radius="10")
              template(v-for="item in plot_dtl")
                l-marker( :key="item.id", :lat-lng="getlatlng(item)" :name="item.id")                 
                  l-tooltip(:options="{ permanent: true, interactive: true }")
                    div(@click="golog(item)") {{ item.pno}}
         
</template>
<script>
import {
  mdiPlus,
  mdiArrowLeft,
  mdiMicrosoftExcel,
  mdiArrowRight,
  mdiCrosshairsGps,
  mdiCheck,
  mdiPlay,
  mdiAlarm
} from '@mdi/js'
import { mapGetters, mapActions, mapState } from 'vuex'

import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LTooltip, LCircle } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import { Icon } from 'leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'BBS_Log_DTL',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LCircle
  },
  data: () => ({
    icons: {
      mdiPlus,
      mdiArrowLeft,
      mdiMicrosoftExcel,
      mdiArrowRight,
      mdiCrosshairsGps,
      mdiCheck,
      mdiPlay,
      mdiAlarm
    },
    dialog: false,
    zoom: 16,
    center: latLng(25.105497, 121.597366),
    //url: 'https://www.google.com/maps/vt?lyrs=m@189&&x={x}&y={y}&z={z}',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //url:'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    currentZoom: 11.5,
    showParagraph: false,
    yourposition: null,
    mapOptions: {
      zoomSnap: 0.5
    },
    showMap: true,
    adddtl: {
      log_id: '',
      plot_dtl: ''
    },
    watchID: null,
    position: null,
    now: new Date().valueOf()
  }),
  computed: {
    ...mapState(['weather', 'wind', 'plottype', 'watertype']),
    ...mapGetters({
      bbs_log: 'getBbs_logSelected',
      plot: 'getPlotSelected',
      bbs_log_dtl: 'getBbs_log_dtl',
      plot_dtl: 'getPlot_dtl',
      log_bird: 'getBbs_log_bird'
    })
  },
  created() {
    const bbs_log_id = this.$route.params.logid
    this.bbs_logSelect({ id: bbs_log_id })

    this.plotSelect({ id: this.bbs_log.plot })
    this.$store.dispatch('bbs_log_dtlSetSort', {
      sort: 'create_date',
      reverse: false
    })
    this.bbs_log_dtlSetFilter({ log_id: this.bbs_log.id })
    this.plot_dtlSetFilter({ plot: this.plot.id })
    this.$store.dispatch('bbs_log_birdSetSort', { sort: 'create_date' })
    // create bbs_log_dtl
    /*
    if (this.bbs_log_dtl.length == 0) {
      this.plot_dtl.forEach(item =>
        this.$store.dispatch('bbs_log_dtlAdd', {
          log_id: this.bbs_log.id,
          plot_dtl: item.id,
          wind: this.bbs_log.wind,
          weather: this.bbs_log.weather,
          create_date: new Date().valueOf()
        })
      )
    }
    */
    /*
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        //console.log(position.coords.latitude, position.coords.longitude)
        this.yourposition = latLng(
          position.coords.latitude,
          position.coords.longitude
        )
      },
      error => {
        console.log(error)
      }
    )
    */

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        //console.log(position, this.watchID)
        this.yourposition = latLng(
          position.coords.latitude,
          position.coords.longitude
        )
        this.center = this.yourposition
      },
      () => {
        //console.log('error navi')
        navigator.geolocation.clearWatch(this.watchID)
      },
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      }
    )

    this.adddtl.log_id = bbs_log_id
    this.adddtl.plot_dtl = this.plot_dtl[0].id
    // this.changecenter(this.plot_dtl[0])
  },
  methods: {
    ...mapActions([
      'bbs_logSelect',
      'plotSelect',
      'bbs_log_dtlSetFilter',
      'plot_dtlSetFilter'
    ]),
    zoomUpdate(zoom) {
      this.currentZoom = zoom
    },
    centerUpdate(center) {
      this.currentCenter = center
    },
    onResize() {
      this.$refs.map.mapObject._onResize()
    },
    convertlatlng(data) {
      let tmp = data.split(/°|'|"/)
      return (
        parseInt(tmp[0]) + parseInt(tmp[1]) / 60 + parseFloat(tmp[2]) / 3600
      )
    },
    getlatlng(item) {
      return latLng(this.convertlatlng(item.lat), this.convertlatlng(item.lng))
    },
    changecenter(e) {
      this.center = this.getlatlng(e)
    },
    golog(e) {
      const item = this.bbs_log_dtl.find(item => item.plot_dtl == e.id)
      this.$router.push({ name: 'BBS記錄', params: { logid: item.id } })
    }
  }
}
</script>
