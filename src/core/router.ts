import Vue from 'vue';
import Router from 'vue-router';
import appRoutes from '../app/app.routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: appRoutes,
});
