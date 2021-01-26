<template>
  <section class="flex items-center justify-center w-full">
    <section class="flex flex-col items-center justify-center">
      <span class="text-5xl md:text-8xl text-gray-900 dark:text-gray-50 | font-bold text-center">
        Work in progress
      </span>
      <p class="text-md md:text-3xl text-center mb-10 md:mb-12 text-gray-900 dark:text-gray-50">
        This site is under construction
      </p>
    </section>
    <WipFigures />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'error-layout',
})
export default class WorkInProgressPage extends Vue {}
</script>
