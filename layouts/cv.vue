<template>
  <main class="cv">
    <ClientOnly>
      <CvNavigationBar />
    </ClientOnly>
    <Nuxt class="cv__content" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';

@Component({
  head (): MetaInfo {
    return {
      titleTemplate: (titleChunk): string => {
        return titleChunk ? `${titleChunk} - Christian Bravo` : 'Christian Bravo';
      },
    };
  },
})
export default class CvLayout extends Vue {}
</script>

<style lang="scss" scoped>
.cv {
  min-height: 100vh;
  background-color: gray;

  &__content {
    padding-top: rem(93);
  }
}
</style>
