import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})


// Filters
Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
