import path from 'path';
import glob from 'glob';
import Vue from 'vue';
import { config, RouterLinkStub } from '@vue/test-utils';

import { markdownRender } from '@/plugins/markdown';

// Mock nuxt component auto registry
glob.sync(path.join(__dirname, '../components/**/*.vue')).forEach((file: string) => {
  const name = file.match(/(\w*)\.vue$/)![1];
  Vue.component(name, require(file).default);
});

config.mocks = {
  $md: markdownRender,
  $colorMode: {
    value: 'dark',
  },
  localePath: (path: string): string => path,
  getRouteBaseName: (): string => '/',
};

config.stubs = {
  NuxtLink: RouterLinkStub,
  Nuxt: {
    template: '<span><slot/></span>',
  },
  PortalTarget: {
    template: '<span><slot/></span>',
  },
};
