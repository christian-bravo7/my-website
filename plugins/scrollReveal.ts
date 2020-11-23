import scrollReveal from 'scrollreveal';

import { Context } from '@nuxt/types';
import { Inject } from '@nuxt/types/app';

export default function (_: Context, inject: Inject): void {
  inject('scrollreveal', scrollReveal({
    delay: 0,
    distance: '0px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: 1,
    cleanup: false,
    container: window.document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    afterReset (el) {},
    afterReveal (el) {},
    beforeReset (el) {},
    beforeReveal (el) {},
  } as scrollReveal.ScrollRevealObjectOptions));
}