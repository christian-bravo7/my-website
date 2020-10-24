<template>
  <AppBanner>
    <template #primary-text>
      <span class="block text-center">
        {{ $t('me.simple-description') }}
      </span>
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
