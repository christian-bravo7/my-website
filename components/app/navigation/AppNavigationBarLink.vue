<template>
  <NuxtLink
    class="mx-6 | text-center text-base | primary-text"
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
