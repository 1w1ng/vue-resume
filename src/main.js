import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
