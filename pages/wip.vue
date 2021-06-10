<template>
  <section class="flex items-center justify-center | w-full">
    <section class="flex flex-col items-center justify-center">
      <span class="text-5xl md:text-8xl | mb-6 | text-gray-900 dark:text-gray-100 | font-bold text-center">
        Work in progress
      </span>
      <p class="text-md md:text-3xl | text-center | mb-10 md:mb-12 | text-gray-900 dark:text-gray-100">
        This site is under construction
      </p>
    </section>
    <GenericBackgroundFigures :figure-component="gearIcon" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { getMetaTags } from '@/seo';

import GearIcon from '~/assets/img/gear.svg?inline';

@Component({
  layout: 'error-layout',
  head () {
    const WIPMetaTags = getMetaTags({
      siteTitle: 'Work in progress',
    });

    return {
      ...WIPMetaTags,
    };
  },
})
export default class WorkInProgressPage extends Vue {
  get gearIcon (): Vue {
    return GearIcon as Vue;
  }
}
</script>
