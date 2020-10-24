<template>
  <section class="flex items-center justify-items-center w-full">
    <section class="flex flex-col items-center justify-center">
      <h1 class="text-7xl md:text-8xl text-gray-900 dark:text-gray-50">
        Oops!
      </h1>
      <p class="text-xl md:text-3xl text-center mb-8 text-gray-900 dark:text-gray-50">
        {{ $t('error.404-description') }}
      </p>
      <NuxtLink
        class="px-6 py-4 text-base md:text-lg rounded-full bg-pink-800 dark:bg-blue-500 text-white"
        :to="localePath('index')"
      >
        {{ $t('error.home-link') }}
      </NuxtLink>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'error-layout',
})
export default class ErrorPage extends Vue {}
</script>
