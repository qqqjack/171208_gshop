
import Vue from 'vue'
import App from './App'
import router from './router/luyou.js'



new Vue({
  el: '#app',
  components:{App},
  render: h => h(App),
  router
})
