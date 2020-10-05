<template>
  <AppBanner>
    <template #primary-text>
      <span class="is-block has-text-centered">
        {{ $t('home.iam-name-text') }}
      </span>
      <span class="is-block has-text-centered">
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
