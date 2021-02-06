<template>
  <section>
    <Portal to="page-banner">
      <HomeBanner />
    </Portal>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import { getMetaTags } from '@/seo';

@Component({
  head () {
    const homeMetaTags = getMetaTags({
      siteTitle: this.$t('navigation.home-label') as string,
    });

    return {
      ...homeMetaTags,
    };
  },
})
export default class Home extends Vue {}
</script>
