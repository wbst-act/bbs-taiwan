import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import VueOffline from 'vue-offline'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './registerServiceWorker'

//import VueGtag from 'vue-gtag'

//Vue.use(VueGtag, { config: { id: 'G-WYQ54X9H9D' } }, router)
Vue.use(VueOffline)
Vue.use(VueAxios, axios)
Vue.use(VueMoment, { moment })
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
