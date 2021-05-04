<template lang="pug">
v-app(v-if="plot")
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(@click="$router.back()")
      v-icon {{ icons.mdiArrowLeft}}
    v-toolbar-title  {{ plot.id}} {{ plot.name }} 歷年鳥種清單
  v-main
    v-card(flat)
      v-card-text(v-if="Object.keys(birds).length==0" )
        v-alert(type="warning" border="top" colored-border elevation="2") 尚無歷年鳥種記錄
      v-list(two-line dense)
        template(v-for="(bird, name) of birds" )
          v-list-item(:key="name" @click="speak(name, bird)" link)
            v-list-item-content
              v-list-item-title
                span.text-h6.mr-5 {{name}}
                span.text-h6 {{bird.es.join(' ')}}
              v-list-item-subtitle(v-html="bird.e+`<span style='float:right'><i>${bird.sn}</i></span>`")
            v-list-item-action
              v-icon {{ icons.mdiVolumeHigh}}
          v-divider
</template>
<script>
import {
  mdiArrowLeft,
  mdiPencil,
  mdiDelete,
  mdiEye,
  mdiVolumeHigh
} from '@mdi/js'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PlotBird',
  data: () => ({
    icons: {
      mdiArrowLeft,
      mdiPencil,
      mdiDelete,
      mdiEye,
      mdiVolumeHigh
    },
    plotid: '',
    allbirds: {},
    birds: {},
    synth: window.speechSynthesis,
    speech: new window.SpeechSynthesisUtterance()
  }),
  async mounted() {},
  computed: {
    ...mapGetters({
      plot: 'getPlotSelected'
    }),
    ...mapState(['static_data_path'])
  },
  async created() {
    this.plotid = this.$route.params.plotid
    this.allbirds = await fetch(
      this.static_data_path + 'ebird_bird.json'
    ).then(r => r.json())
    const res = await fetch(this.static_data_path + 'plot_bird.json').then(r =>
      r.json()
    )
    const datalist = res[this.plotid] ? res[this.plotid] : []
    this.birds = Object.fromEntries(
      Object.entries(this.allbirds).filter(item => datalist.includes(item[1].i))
    )
    this.$store.dispatch('plotSelect', { id: this.plotid })
    this.speech.voice = this.synth
      .getVoices()
      .find(item => item.lang == 'zh-TW')
  },
  methods: {
    speak(name, bird) {
      this.speech.text = name + ' ' + bird.e
      this.synth.speak(this.speech)
    }
  }
}
</script>
