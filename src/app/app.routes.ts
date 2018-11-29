import { resolveRoutes } from '../common';
import Authentication from './Authentication';

const appRoutes = resolveRoutes([
  Authentication,
]);

appRoutes.push(
  {
    path: '/',
    redirect: { name: 'signin' },
  },
);

export default appRoutes;
