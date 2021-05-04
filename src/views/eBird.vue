<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(to='/')
      v-icon {{ icons.mdiHome}}
    v-toolbar-title 
      span.mr-5 中華鳥名錄
    v-spacer
    .subtitle-1 2020 ver
  v-main
    v-card(flat)
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
    v-bottom-sheet(v-model="dialog")
      template(v-slot:activator="{ on, attrs }")
        v-btn(fixed, dark, fab, bottom, right, color="blue-grey", @click="dialog=true;")
          v-icon {{ icons.mdiMagnify }}
      v-sheet
        v-container(fluid)
          v-row
            v-col(cols="12")
              v-select(v-model='filter_family' :items="familys" item-text='name', item-value='id' @change='search_birds' dense, label='篩選科別')  
            v-col(cols="12")
              v-text-field(label="任意字查詢", dense, v-model='search_words' @input="search_birds" clearable)
</template>
<script>
import { mapState } from 'vuex'
import { mdiHome, mdiDotsVertical, mdiVolumeHigh, mdiMagnify } from '@mdi/js'
export default {
  name: 'Sname',
  data: () => ({
    icons: { mdiHome, mdiDotsVertical, mdiVolumeHigh, mdiMagnify },
    birds: null,
    allbirds: {},
    ebird_family: {},
    search_words: '',
    filter_family: 0,
    dialog: false,
    synth: window.speechSynthesis,
    speech: new window.SpeechSynthesisUtterance()
  }),
  computed: {
    familys() {
      return [
        { name: '全部', id: 0 },
        ...Object.entries(this.ebird_family).map(item => ({
          id: item[1],
          name: item[0]
        }))
      ]
    },
    ...mapState(['static_data_path'])
  },
  async mounted() {
    this.ebird_family = await fetch(
      this.static_data_path + 'ebird_family.json'
    ).then(r => r.json())
    this.allbirds = await fetch(
      this.static_data_path + 'ebird_bird.json'
    ).then(r => r.json())
    this.birds = Object.assign({}, this.allbirds)
  },
  created() {
    this.speech.voice = this.synth
      .getVoices()
      .find(item => item.lang == 'zh-TW')
  },
  methods: {
    FindCodes(codes, searchText) {
      if (codes.length > 0) {
        return codes.findIndex(item => item.indexOf(searchText) == 0) >= 0
      } else {
        return false
      }
    },
    async search_birds() {
      this.birds = Object.assign({}, this.allbirds)
      if (this.filter_family != 0) {
        this.birds = Object.fromEntries(
          Object.entries(this.birds).filter(
            ([, value]) => value.f == this.filter_family
          )
        )
      }
      if (this.search_words) {
        let searchText = this.search_words.toUpperCase()
        this.birds = Object.fromEntries(
          Object.entries(this.birds).filter(
            ([key, value]) =>
              key.includes(searchText) ||
              this.FindCodes(value.es, searchText) ||
              (searchText.length > 3 &&
                (value.e.toUpperCase().indexOf(searchText) == 0 ||
                  value.sn.toUpperCase().indexOf(searchText) == 0))
          )
        )
      }
    },
    speak(name, bird) {
      this.speech.text = name + ' ' + bird.e
      this.synth.speak(this.speech)
    },
    format_ename(ename) {
      let split_words = ename.split(/ |-/)
      if (split_words.length == 1) {
        return (
          `<span class="black--text">${ename.substr(0, 4)}</span>` +
          `${ename.substr(4)}`
        )
      } else if (split_words.length == 2) {
        return (
          `<span class="black--text">${ename.substr(0, 2)}</span>` +
          `${ename.substring(2, ename.indexOf(split_words[1]))}` +
          `<span class="black--text">${ename.substr(
            ename.indexOf(split_words[1]),
            2
          )}</span>` +
          `${ename.substring(ename.indexOf(split_words[1]) + 2)}`
        )
      } else if (split_words.length == 3) {
        return (
          `<span class="black--text">${ename.substr(0, 1)}</span>` +
          `${ename.substring(1, ename.indexOf(split_words[1]))}` +
          `<span class="black--text">${ename.substr(
            ename.indexOf(split_words[1]),
            1
          )}</span>` +
          `${ename.substring(
            ename.indexOf(split_words[1]) + 1,
            ename.indexOf(split_words[2])
          )}` +
          `<span class="black--text">${ename.substr(
            ename.indexOf(split_words[2]),
            2
          )}</span>` +
          `${ename.substring(ename.indexOf(split_words[2]) + 2)}`
        )
      } else {
        return (
          `<span class="black--text">${ename.substr(0, 1)}</span>` +
          `${ename.substring(1, ename.indexOf(split_words[1]))}` +
          `<span class="black--text">${ename.substr(
            ename.indexOf(split_words[1]),
            1
          )}</span>` +
          `${ename.substring(
            ename.indexOf(split_words[1]) + 1,
            ename.indexOf(split_words[2])
          )}` +
          `<span class="black--text">${ename.substr(
            ename.indexOf(split_words[2]),
            1
          )}</span>` +
          `${ename.substring(
            ename.indexOf(split_words[2]) + 1,
            ename.indexOf(split_words[3])
          )}` +
          `<span class="black--text">${ename.substr(
            ename.indexOf(split_words[3]),
            1
          )}</span>` +
          `${ename.substring(ename.indexOf(split_words[3]) + 1)}`
        )
      }
    }
  }
}
</script>
