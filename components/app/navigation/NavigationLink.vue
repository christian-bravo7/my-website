<template>
  <NuxtLink
    class="text-center primary-text mx-8"
    exact-active-class="font-bold"
    :to="localePath(...linkPath)"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component, mixins } from 'nuxt-property-decorator';

import LinkEnglishPath from '@/components/app/navigation/LinkEnglishPath';

@Component
export default class NavigationLink extends mixins(Vue, LinkEnglishPath) { }
</script>
