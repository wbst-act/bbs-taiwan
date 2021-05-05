<template lang="pug">
v-app
  v-app-bar(app, color="blue-grey", dark, dense)
    v-app-bar-nav-icon(to='/')
      v-icon {{ icons.mdiHome}}
    v-toolbar-title 更新資料 {{ version }} => {{ new_version }}
  v-main
    v-card.mx-auto(flat)
      v-list(dense)
        v-list-item
          v-list-item-content 
            v-list-item-title  更新中華鳥目錄 
            v-list-item-subtitle {{ success[0] ?  '': '成功'}} 
        v-divider
        v-list-item
          v-list-item-content 
            v-list-item-title  更新中華鳥目錄分類 
            v-list-item-subtitle {{ success[1] ?  '': '成功'}}  
        v-divider
        v-list-item
          v-list-item-content 
            v-list-item-title  更新BBS輸入鳥名錄 
            v-list-item-subtitle {{ success[2] ?  '': '成功'}}  
        v-divider
        v-list-item
          v-list-item-content 
            v-list-item-title  更新BBS樣點資料 
            v-list-item-subtitle {{ success[3] ?  '': '成功'}}  
        v-divider
        v-list-item
          v-list-item-content 
            v-list-item-title  更新BBS歷年鳥種清單
            v-list-item-subtitle {{ success[4] ?  '': '成功'}}  
        v-divider
</template>
<script>
import { mdiHome } from '@mdi/js'

export default {
  name: 'Update',
  data: () => ({
    icons: { mdiHome },
    version: '',
    new_version: '',
    success: [false, false, false, false, false]
  }),
  mounted() {
    this.version = this.$route.params.version
    this.new_version = ''
  },
  created() {
    this.updated_offline_storage()
  },
  methods: {
    async updated_offline_storage() {
      this.new_version = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/1/public/full?alt=json'
        )
        .then(ret => ret.data.feed.entry[0].gsx$version.$t)

      const array2object = items => {
        const ret = items.reduce((result, item) => {
          const key = Object.keys(item)[0]
          result[key] = item[key]
          return result
        })
        return ret
      }

      // update bird list
      const birds = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/2/public/full?alt=json'
        )
        .then(ret =>
          array2object(
            ret.data.feed.entry.map(item => ({
              [item.gsx$cname.$t]: {
                e: item.gsx$ename.$t,
                f: parseInt(item.gsx$fid.$t),
                i: parseInt(item.gsx$id.$t),
                sn: item.gsx$sname.$t,
                es: item.gsx$shortname.$t.split(',')
              }
            }))
          )
        )
      this.$offlineStorage.set('tw_birds', birds)
      this.success[0] = true

      // update family list
      const familys = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/3/public/full?alt=json'
        )
        .then(ret =>
          array2object(
            ret.data.feed.entry.map(item => ({
              [item.gsx$name.$t]: parseInt(item.gsx$fid.$t)
            }))
          )
        )
      this.$offlineStorage.set('tw_familys', familys)
      this.success[1] = true

      // update bbs bird list
      const bbs_birds = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/4/public/full?alt=json'
        )
        .then(ret =>
          array2object(
            ret.data.feed.entry.map(item => ({
              [item.gsx$bbsname.$t]: {
                cn: item.gsx$cname.$t,
                en: item.gsx$ename.$t,
                sn: item.gsx$sname.$t,
                es: item.gsx$shortname.$t.split(',')
              }
            }))
          )
        )
      this.$offlineStorage.set('bbs_birds', bbs_birds)
      this.success[2] = true

      //update plot history birds
      const plots = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/5/public/full?alt=json'
        )
        .then(ret => {
          let plot = {}
          for (const item of ret.data.feed.entry) {
            if (
              !Object.prototype.hasOwnProperty.call(plot, item.gsx$樣區編號.$t)
            ) {
              plot[item.gsx$樣區編號.$t] = {
                name: item.gsx$樣區名稱.$t,
                city: item.gsx$縣市.$t,
                plotdtl: new Array()
              }
            }
            plot[item.gsx$樣區編號.$t]['plotdtl'].push({
              id: item.gsx$樣區樣點編號.$t,
              pno: parseInt(item.gsx$樣點代號.$t),
              lng: item.gsx$x經度度分秒.$t,
              lat: item.gsx$y緯度度分秒.$t
            })
          }
          return plot
        })
      this.$offlineStorage.set('plots', plots)
      this.success[3] = true

      //update plot history birds
      const plot_birds = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/6/public/full?alt=json'
        )
        .then(ret =>
          array2object(
            ret.data.feed.entry.map(item => ({
              [item.gsx$pid.$t]: item.gsx$bird.$t
                .split(',')
                .map(item => parseInt(item))
            }))
          )
        )
      this.$offlineStorage.set('plot_birds', plot_birds)
      this.success[4] = true

      this.$offlineStorage.set('version', this.new_version)
    }
  }
}
</script>
