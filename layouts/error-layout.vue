<template>
  <main class="min-h-screen | flex items-center | p-4 | bg-gray-50 dark:bg-dark-theme-800">
    <Nuxt class="z-10" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ErrorLayout extends Vue {}
</script>
