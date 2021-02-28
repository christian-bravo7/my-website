<template>
  <div class="card">
    <p class="text-base | text-black dark:text-white">
      {{ $t('home.no-recent-projects-message') }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class RecentProjectAdvice extends Vue {}
</script>
