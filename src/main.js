import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Form from "./components/Form.vue";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/form', component: Form },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
