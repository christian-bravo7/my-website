<template>
  <AppBanner>
    <template #primary-text>
      <span
        class="block | text-center | leading-snug | about-me-banner__description"
        v-html="$md($t('me.simple-description'))"
      />
    </template>
    <template #secondary-text>
      {{ $t('navigation.about-me-label') }}
    </template>
  </AppBanner>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AboutMeBanner extends Vue {}
</script>

<style lang="scss" scoped>
.about-me-banner {
  &__description {
    /* stylelint-disable */
    :deep(strong) {
      font-weight: normal;

      @include theme-gradients (one, two);
    }
  }
}
</style>
