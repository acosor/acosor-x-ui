import { RouteConfig } from 'vue-router';
import SignIn from './views/SignIn.vue';

const routings: RouteConfig[] = [
  {
    name: 'signin',
    path: 'signin',
    component: SignIn,
  },
];

export default routings;
