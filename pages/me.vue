<template>
  <section class="home">
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

import RemolinoLogo from '~/assets/img/remolino.svg?inline';

@Component({
  components: {
    Portal,
    RemolinoLogo,
  },
  head () {
    return {
      title: this.$t('navigation.about-me-label') as string,
    };
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
}
</style>
