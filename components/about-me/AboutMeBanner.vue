<template>
  <AppBanner>
    <template #primary-text>
      <span class="is-block has-text-centered">
        {{ $t('me.simple-description') }}
      </span>
    </template>
    <template #secondary-text>
      <span class="is-block has-text-centered">
        {{ $t('me.about-label') }}
      </span>
      <span class="is-block has-text-centered">
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
