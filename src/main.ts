import Vue from 'vue';

import { router } from './core';

import App from './app/App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

app.$mount('#app');
