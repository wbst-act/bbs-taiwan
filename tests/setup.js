import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueMoment, { moment })
Vue.config.productionTip = false
