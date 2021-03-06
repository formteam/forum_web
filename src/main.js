// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/styles/index.scss'
import echarts from 'echarts'

import App from './App'
 import './permission'


Vue.use(ElementUI, { locale })
Vue.use(echarts)
Vue.prototype.$echarts=echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App),
})
