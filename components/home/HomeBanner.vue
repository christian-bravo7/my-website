<template>
  <AppBanner>
    <template #primary-text>
      <span class="text-center block">
        {{ $t('home.iam-name-text') }}
      </span>
      <span class="text-center block">
        {{ $t('home.iam-job-text') }}
      </span>
    </template>
    <template #secondary-text>
      <span>
        {{ $t('home.gretting') }}
      </span>
    </template>
  </AppBanner>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class HomeBanner extends Vue {}
</script>
