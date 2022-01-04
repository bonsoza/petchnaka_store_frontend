import Vue from 'vue'
import * as VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/js/bootstrap'
import * as jquery from 'jquery'
import './assets/styles.css'
import { BModal } from 'bootstrap-vue'

import { ValidationProvider } from 'vee-validate';

Vue.component('b-modal', BModal)
Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.jquery = jquery;
Vue.use(VeeValidate);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
