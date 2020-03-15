import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/css/global.css'
import '@/styles/fonts/iconfont.css'
import MovieList from '@/components/movie-list'

Vue.config.productionTip = false
Vue.component('movie-list', MovieList)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
