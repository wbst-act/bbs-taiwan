<template lang="pug">
  router-view(v-if="hydrated")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters({ hydrated: 'hydrated' })
  }
}
</script>
