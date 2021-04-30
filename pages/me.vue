<template>
  <section>
    <Portal to="page-banner">
      <AboutMeBanner />
    </Portal>
    <AboutMeInformation class="mb-24 md:mb-0" />
    <MyWorkExperience class="mb-24 md:mb-0" />
    <AppContactMe />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import { getMetaTags } from '@/seo';

@Component({
  head () {
    const aboutMeTags = getMetaTags({
      siteTitle: this.$t('navigation.about-me-label') as string,
    });

    return {
      ...aboutMeTags,
    };
  },
})
export default class Me extends Vue {}
</script>
