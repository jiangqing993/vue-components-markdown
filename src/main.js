import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import DemoBlock from './components/common/DemoBlock'

import 'iview/dist/styles/iview.css'

import 'highlight.js/styles/github.css'

import './assets/fonts/iconfont.css'

import JqComSearch from '@/components/others/JqComSearch'
import JqBreadcrumb from '@/components/others/JqBreadcrumb'

// 日历
// import leapCalendar from 'vue-leap-calendar'
// Vue.use(leapCalendar)
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(mavonEditor)

// 搜索组件
Vue.component('jq-com-search', JqComSearch)
Vue.component('jq-breadcrumb', JqBreadcrumb)

Vue.component('demo-block', DemoBlock)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
