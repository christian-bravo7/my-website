<template>
  <section class="flex items-center justify-center w-full">
    <section class="flex flex-col items-center justify-center">
      <span
        id="oops"
        class="text-5xl md:text-8xl text-gray-900 dark:text-gray-50 font-bold"
      >
        @#$%@#
      </span>
      <p class="text-md md:text-3xl text-center mb-10 md:mb-12 text-gray-900 dark:text-gray-50">
        {{ $t('error.404-description') }}
      </p>
      <NuxtLink
        class="px-6 py-3 text-base md:text-lg rounded-full bg-pink-500 dark:bg-blue-500 text-white"
        :to="localePath('index')"
      >
        {{ $t('error.home-link') }}
      </NuxtLink>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import baffle from 'baffle';

@Component({
  layout: 'error-layout',
})
export default class ErrorPage extends Vue {
  shuffleText (): void {
    // @ts-ignore
    const secondaryText = baffle('#oops', { speed: 100, characters: '~!@#$%^&*()-+=[]{}|;:,./<>?' });
    secondaryText.start();
  }

  mounted (): void {
    this.shuffleText();
  }
}
</script>
