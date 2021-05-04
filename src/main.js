import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

import './registerServiceWorker'

//import VueGtag from 'vue-gtag'

//Vue.use(VueGtag, { config: { id: 'G-WYQ54X9H9D' } }, router)
Vue.use(VueMoment, { moment })
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
