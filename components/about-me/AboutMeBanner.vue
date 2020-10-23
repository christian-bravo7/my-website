<template>
  <AppBanner>
    <template #primary-text>
      <span class="block text-center">
        {{ $t('me.simple-description') }}
      </span>
    </template>
    <template #secondary-text>
      <span class="block text-center">
        {{ $t('me.about-label') }}
      </span>
      <span class="block text-center">
        {{ $t('me.me-label') }}
      </span>
    </template>
  </AppBanner>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AboutMeBanner extends Vue {}
</script>
