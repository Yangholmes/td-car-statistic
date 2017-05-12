import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)

import Yang from 'yangjs'
const yang = new Yang()
yang.ajax({url: 'http://www.gdrtc.org/car/server/reservation/application-init.php'}).then( (res)=>{console.log(res)}, (res)=>{console.log(res)} );

// Vue.http.options.emulateJSON = true
// Vue.http.options.emulateHTTP = true;

import routes from './routes.js'
// instance a VueRouter
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  // base: 'statistic/pc',
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router ,
  render: h => h(App)
}).$mount('#app')
