import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { routes } from './routes'

import {store} from './store/store.js'

Vue.use(VueRouter)



axios.defaults.baseURL = "https://yoyo-59406.firebaseio.com/" //https://wd1940833283mwmojl.wilddogio.com/'



var router = new VueRouter({
	routes,
	mode:"history"
})

new Vue({
  el: '#app',
  router,
  store, 
  render: h => h(App)
})
