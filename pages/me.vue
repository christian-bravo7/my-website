<template>
  <section>
    <Portal to="page-banner">
      <AboutMeBanner />
    </Portal>
    <AboutMeInformation />
    <AboutMeSkills />
    <AboutMeBriefHistory />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head () {
    return {
      title: this.$t('navigation.about-me-label') as string,
    };
  },
})
export default class Me extends Vue {}
</script>
