import { RouteConfig } from 'vue-router';
import { IModuleDescription } from '../common/imodule.description';
import Authentication from './Authentication';

const resolvePath = (path: string) => {
  if (path.length) {
    if (path[0] === '/') {
      return path;
    } else {
      return `/${path}`;
    }
  } else {
    return '/';
  }
};

const resolveRoutes = (descriptions: IModuleDescription[]): RouteConfig[] =>
  descriptions.map((each) => ({
    name: each.Name,
    path: resolvePath(each.Path),
    component: each.EntryComponent,
    children: each.Routings,
  }));

const appRoutes: RouteConfig[] = resolveRoutes([Authentication]);

export default appRoutes;
