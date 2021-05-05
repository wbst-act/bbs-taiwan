<template lang="pug">
  router-view(v-if="hydrated")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    updated: false
  }),
  computed: {
    ...mapGetters({ hydrated: 'hydrated' })
  },
  async mounted() {
    if (this.isOnline) {
      const local_version = this.$offlineStorage.get('version')
      const new_version = await this.check_update()
      if (local_version != new_version) {
        this.$router.push({
          name: '更新資料',
          params: { version: local_version, new_version: new_version }
        })
      }
    }
  },
  methods: {
    async check_update() {
      const version = await this.$http
        .get(
          'https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/1/public/full?alt=json'
        )
        .then(ret => ret.data.feed.entry[0].gsx$version.$t)
      return version
    }
  }
}
</script>
