import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  "jquery"

window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vuex from 'vuex'
Vue.use(Vuex)

import { storage } from './store/index'
const store = new Vuex.Store(storage)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
