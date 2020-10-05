<template>
  <section class="home">
    <Portal to="page-banner">
      <HomeBanner />
    </Portal>
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
      title: this.$t('navigation.home-label') as string,
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
