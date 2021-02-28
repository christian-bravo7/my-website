<template>
  <NuxtLink
    class="text-center primary-text mx-8"
    exact-active-class="font-bold"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppNavigationBarLink extends Vue { }
</script>
