<template>
  <section>
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
