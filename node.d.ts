import VueI18n, { IVueI18n } from 'vue-i18n/types';
import { Route, RawLocation } from 'vue-router';
import scrollReveal from 'scrollreveal';

declare module 'vue/types/vue' {
  interface Vue {
    $t: typeof VueI18n.prototype.t;
    localePath(route: RawLocation, locale?: string): string
    switchLocalePath(locale: string): string
    getRouteBaseName(route?: Route): string
    readonly $i18n: VueI18n & IVueI18n,
    $scrollreveal: scrollReveal.ScrollRevealObject,
  }
}
