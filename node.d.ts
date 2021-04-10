import VueI18n from 'vue-i18n/types';
import { Route, RawLocation } from 'vue-router';
import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode';

declare module 'vue/types/vue' {
  interface Vue {
    localePath(route: RawLocation, locale?: string): string;
    switchLocalePath(locale: string): string;
    getRouteBaseName(route?: Route): string;
    $colorMode: ColorModeInstance;
  }
}
