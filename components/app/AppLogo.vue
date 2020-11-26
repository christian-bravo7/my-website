<template>
  <NuxtLink
    class="flex w-12 h-12 text-black dark:text-white col-span-1"
    :to="localePath({ name: 'index' })"
  >
    <SiteLogo class="w-full h-full fill-current" />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import SiteLogo from '~/assets/img/logo.svg?inline';

@Component({
  components: {
    SiteLogo,
  },
})
export default class AppLogo extends Vue {}
</script>
