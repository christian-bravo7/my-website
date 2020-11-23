<template>
  <p class="z-50 text-gray-400 dark:text-gray-400 text-xs page-author-credits select-none">
    &copy; 2021 CHRISTIAN BRAVO
  </p>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class PageAuthorCredits extends Vue {}
</script>

<style lang="scss" scoped>
.page-author-credits {
  position: fixed;
  right: rem(16);
  bottom: rem(16);
}
</style>
