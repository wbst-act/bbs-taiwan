<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(to='/')
      v-icon {{ icons.mdiHome}}
    v-toolbar-title 關於程式
  v-main
    v-card.mx-auto(flat)
      v-card-text
        v-alert(type="success" border="top" colored-border elevation="2") 
          | 編譯時間 : {{ builddate | moment('YYYY-MM-DD HH:mm:ss')}}
        v-alert(type="success" border="top" colored-border elevation="2") 
          | 資料版本 : {{ data_version }}
        v-alert(type='error' border="top" colored-border elevation="2") 
          v-btn(@click='cleardb' color="red" dark) 初始化資料庫
</template>
<script>
import { mdiHome } from '@mdi/js'
import { mapMutations } from 'vuex'
export default {
  name: 'About',
  data: () => ({
    icons: { mdiHome },
    builddate: '',
    data_version: ''
  }),
  created() {
    this.builddate = new Date(
      parseInt(document.documentElement.dataset.buildTimestamp)
    )
    this.data_version = this.$offlineStorage.get('version')
  },
  methods: {
    ...mapMutations(['DELETE_INDEXED_DB']),
    async cleardb() {
      if (confirm('確定初始化資料庫')) {
        const keys = JSON.parse(this.$offlineStorage.keys)
        keys.forEach(key => {
          localStorage.removeItem(key)
        })
        localStorage.removeItem('VueOfflineStorageKeys')
        await this.DELETE_INDEXED_DB()
        window.location.href = '/bbs-taiwan'
      }
    }
  }
}
</script>
