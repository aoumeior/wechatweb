// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false
/* 取消警告和日志 */
Vue.config.silent = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    Bus: new Vue()
  },
  router,
  components: { App },
  template: '<App/>'
})
