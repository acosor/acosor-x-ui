import { IModuleDescription } from '../../common/imodule.description';
import EntryComponent from './Authentication.vue';
import Routings from './routings';

const description: IModuleDescription = {
  Name: 'authentication',
  Path: 'authen',
  EntryComponent,
  Routings,
};
export default description;
