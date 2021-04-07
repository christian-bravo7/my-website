/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { config } from '@vue/test-utils';

config.mocks = {
  $md: label => label,
  $t: msg => msg,
  localePath: path => path,
  getRouteBaseName: _ => '/',
};

config.stubs = {
  AppNavigationBar: {
    template: '<div></div>',
  },
  AppSidebarMenu: {
    template: '<div></div>',
  },
  AppFallbackLoad: {
    template: '<div></div>',
  },
  PostCardEmpty: {
    template: '<div></div>',
  },
  AppFooter: {
    template: '<div></div>',
  },
  AppContactMe: {
    template: '<div></div>',
  },
  Nuxt: {
    template: '<div></div>',
  },
  PortalTarget: {
    template: '<div></div>',
  },
  MovableFigures: {
    template: '<div></div>',
  },
};
