/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { config } from '@vue/test-utils';

import MarkDownIt from 'markdown-it';

const md = new MarkDownIt();

const customRender = (tokens, idx, options, _env, self) =>
  self.renderToken(tokens, idx, options);

const render = md.renderer.rules.link_open || customRender;

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const anchorToken = tokens[idx];
  const hrefUrl = anchorToken.attrGet('href');
  // Regex matches <schema>:// or schema relative urls //
  const isUrlAbsolute = !!(hrefUrl && hrefUrl.match(/^(?:[a-zA-Z]+:)?\/\//));

  if (isUrlAbsolute) {
    anchorToken.attrSet('target', '_BLANK');
  }

  return render(tokens, idx, options, env, self);
};

config.mocks = {
  $md: string => md.render(string),
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
