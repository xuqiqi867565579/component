// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import icons from './plugins/icons'
import api from './api'
import store from './components/store'
import scrollViews from './plugins/scrollView'

Vue.config.productionTip = false
Vue.use(icons)
Vue.use(api)
Vue.use(scrollViews)
window.a = 'i hate it'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  aa: 'i like it',
  components: { App },
  template: '<App/>'
})
