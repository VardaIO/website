// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import './assets/app.css'
Vue.config.productionTip = false
// import particles from 'particles.js'
// Vue.use(particles)
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
console.log(VueParticles)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
