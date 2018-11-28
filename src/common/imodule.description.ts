import { VueConstructor } from 'vue';
import { RouteConfig } from 'vue-router';

export interface IModuleDescription {
  Name?: string;
  Path: string;
  EntryComponent: VueConstructor;
  Routings: RouteConfig[];
}
