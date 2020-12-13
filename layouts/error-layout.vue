<template>
  <main class="min-h-screen flex items-center p-4 bg-gray-50 dark:bg-blue-800">
    <Nuxt class="z-10" />
    <ErrorFigures />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head (): MetaInfo {
    return {
      titleTemplate: (titleChunk): string => {
        return titleChunk ? `${titleChunk} | Christian Bravo` : 'Christian Bravo';
      },
    };
  },
})
export default class ErrorLayout extends Vue {}
</script>
