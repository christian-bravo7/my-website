<template>
  <NuxtLink
    class="flex col-span-1 | w-8 h-8 | text-black dark:text-white"
    :to="localePath({ name: 'index' })"
  >
    <SiteLogo class="w-full h-full | primary-text" />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import SiteLogo from '~/assets/img/logo-new.svg?inline';

@Component({
  components: {
    SiteLogo,
  },
})
export default class AppLogo extends Vue {}
</script>
