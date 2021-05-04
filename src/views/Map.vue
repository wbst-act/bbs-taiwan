<template lang="pug">
v-app(v-if="plot")
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(@click="$router.back()")
      v-icon {{ icons.mdiArrowLeft}}
    v-toolbar-title  {{ plot.id}} {{ plot.name }} 預覽
  v-main
    l-map(
      ref="map" 
      v-resize="onResize"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="min-height: 400px;"
      @update:zoom="zoomUpdate"
    )
      l-tile-layer(:url="url" :attribution="attribution")
      template(v-for="item in plot_dtl")
        l-marker( :key="item.id", :lat-lng="getlatlng(item)" :name="item.id")                 
          l-tooltip(:options="{ permanent: true, interactive: true }") 樣點 {{ item.pno}}

</template>
<script>
import { mdiArrowLeft, mdiPencil, mdiDelete, mdiEye } from '@mdi/js'
import { mapState, mapGetters } from 'vuex'
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data: () => ({
    icons: {
      mdiArrowLeft,
      mdiPencil,
      mdiDelete,
      mdiEye
    },
    plotid: '',
    zoom: 16,
    center: null,
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
    }
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
    this.center = this.getlatlng(
      this.plot_dtl[parseInt(this.plot_dtl.length / 2)]
    )
  },
  methods: {
    idnamelist(obj) {
      return Object.entries(obj).map(item => ({
        id: item[0],
        name: item[0] + ' ' + item[1]
      }))
    },
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
    }
  }
}
</script>
