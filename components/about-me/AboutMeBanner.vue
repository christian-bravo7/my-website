<template>
  <AppBanner>
    <template #primary-text>
      <span
        class="block | text-center | about-me-banner__description"
        v-html="$md($t('me.simple-description'))"
      />
    </template>
    <template #secondary-text>
      {{ $t('navigation.about-me-label') }}
    </template>
    <ScrollIndicator class="absolute | about-me-banner__scroll-indicator" />
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
    /deep/ strong {
      font-weight: normal;

      @include theme-gradients (one, two);
    }
  }

  &__scroll-indicator {
    bottom: 60px;
  }
}
</style>
