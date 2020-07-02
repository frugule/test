import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import boostrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './styles/_imports.scss'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase'
firebase.initializeApp(firebaseConfig)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  firebase,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
