import Vue from 'vue'
import App from './App.vue'

import Header from './header.vue';
import Footer from './footer.vue';
// import images from './images.vue';

Vue.component('app-header', Header);

Vue.component('app-footer', Footer);
// Vue.component('app-images'), images;


import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes';
const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<h3>{{postTitle}}</h3>'
});

Vue.component('button-counter', {
  data: function() {
    return {type: Number, count: 0}
  },
  template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
