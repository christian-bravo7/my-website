<template>
  <section class="flex items-center justify-center | w-full">
    <section class="flex flex-col items-center justify-center">
      <span
        id="oops-label"
        class="text-5xl md:text-8xl | mb-6 | text-gray-900 dark:text-gray-100 | font-bold"
      >
        @#$%@#
      </span>
      <p class="text-md md:text-3xl | text-center | mb-10 md:mb-12 | text-gray-900 dark:text-gray-100">
        {{ $t('error.404-description') }}
      </p>
      <NuxtLink
        class="button"
        :to="localePath('index')"
      >
        {{ $t('error.home-link') }}
      </NuxtLink>
    </section>
    <GenericBackgroundFigures :figure-component="questionIcon" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import baffle from 'baffle';

import QuestionIcon from '~/assets/img/question-icon.svg?inline';

@Component({
  layout: 'error-layout',
})
export default class ErrorPage extends Vue {
  get questionIcon (): Vue {
    return QuestionIcon as Vue;
  }

  shuffleText (): void {
    // @ts-ignore
    const secondaryText = baffle('#oops-label', {
      speed: 100,
      characters: '~!@#$%^&*()-+=[]{}|;:,./<>?',
    });

    secondaryText.start();
  }

  mounted (): void {
    this.shuffleText();
  }
}
</script>
