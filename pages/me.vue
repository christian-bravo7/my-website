<template>
  <section>
    <Portal to="page-banner">
      <AboutMeBanner />
    </Portal>
    <div class="prueba">
      <ContentDivider class="prueba__svg" />
      <AboutMeInformation />
      <ContentDivider :inverse="true" />
    </div>
    <AboutMeSkills />
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
export default class Me extends Vue {
  mounted (): void {
    this.$scrollreveal.reveal('.prueba', {
      distance: '1000px',
      opacity: 0,
      viewFactor: 0.1,
    });
  }
}
</script>

<style lang="scss" scoped>
.prueba {
  margin-top: -90px;

  &__svg {
    margin-bottom: -85px;
  }
}
</style>
