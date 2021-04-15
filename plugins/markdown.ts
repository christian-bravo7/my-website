import { Context } from '@nuxt/types';
import { Inject } from '@nuxt/types/app';
import { RenderRule } from 'markdown-it/lib/renderer';

import MarkDownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

const md = new MarkDownIt();

const customRender: RenderRule = (tokens, idx, options, _env, self) =>
  self.renderToken(tokens, idx, options);

const render = md.renderer.rules.link_open || customRender;

md.renderer.rules.link_open = (tokens, idx, options, env, self): string => {
  const anchorToken : Token = tokens[idx];
  const hrefUrl : string | null = anchorToken.attrGet('href');
  // Regex matches <schema>:// or schema relative urls //
  const isUrlAbsolute : boolean = !!(hrefUrl && hrefUrl.match(/^(?:[a-zA-Z]+:)?\/\//));

  if (isUrlAbsolute) {
    anchorToken.attrSet('target', '_BLANK');
  }

  return render(tokens, idx, options, env, self);
};

export const markdownRender = (markdown: string): string => md.render(markdown);

export default function (_: Context, inject: Inject): void {
  inject('md', markdownRender);
}
