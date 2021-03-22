import MarkDownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import { Inject } from '@nuxt/types/app';
import { Context } from '@nuxt/types';

const md = new MarkDownIt();

const customRender = md.renderer.rules.link_open ||
  ((tokens, idx, options, _env, self): string => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens : Array<Token>, idx : number, options, env, self): string => {
  const aToken : Token = tokens[idx];
  const hrefUrl : string | null = aToken.attrGet('href');
  // Regex matches <schema>:// or schema relative urls //
  const urlIsAbsolute : boolean = !!(hrefUrl && hrefUrl.match(/^(?:[a-zA-Z]+:)?\/\//));

  if (urlIsAbsolute) {
    aToken.attrSet('target', '_BLANK');
  }

  return customRender(tokens, idx, options, env, self);
};

export default function (_: Context, inject: Inject): void {
  inject('md', (markdown: string): string => md.render(markdown));
}
