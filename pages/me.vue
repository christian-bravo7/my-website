<template>
  <section>
    <Portal to="page-banner">
      <AboutMeBanner />
    </Portal>
    <ContentDivider :second="true" />
    <AboutMeInformation />
    <ContentDivider :first="true" />
    <AboutMeSkills />
    <AppFooter />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Portal } from 'portal-vue';

@Component({
  components: {
    Portal,
  },
  head () {
    return {
      title: this.$t('navigation.about-me-label') as string,
    };
  },
})
export default class Me extends Vue {}
</script>
