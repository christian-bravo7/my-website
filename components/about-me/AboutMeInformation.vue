<template>
  <section class="min-h-screen flex items-center py-8 px-4 bg-gray-200 dark:bg-blue-700">
    <div class="grid grid-cols-1 md:grid-cols-2 text-black dark:text-white container mx-auto">
      <div class="relative is-medium">
        <h1 class="w-full text-pink-800 dark:text-blue-500 font-bold text-6xl sm:text-8xl md:text-10xl leading-none">
          {{ $t('me.i-label') }}
        </h1>
        <p class="relative z-10 text-base md:text-lg leading-loose">
          {{ $t('me.about-me-description') }}
        </p>
      </div>
      <div class="flex items-center justify-center text-pink-800 dark:text-blue-500">
        <RemolinoLogo class="w-11/12 fill-current" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import RemolinoLogo from '~/assets/img/remolino.svg?inline';

@Component({
  components: {
    RemolinoLogo,
  },
})
export default class AboutMeInformation extends Vue {}
</script>
