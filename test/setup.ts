import { config, RouterLinkStub } from '@vue/test-utils';

import { markdownRender } from '@/plugins/markdown';

config.mocks = {
  $md: markdownRender,
  localePath: (path: string): string => path,
  getRouteBaseName: (): string => '/',
};

config.stubs = {
  NuxtLink: RouterLinkStub,
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
