<template>
  <section>
    <Portal to="page-banner">
      <HomeBanner />
    </Portal>
    <div class="min-h-screen | flex justify-center">
      <div class="container | bg-gray-100">
        <NewBranchIcon class="block | w-20 h-20" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import NewBranchIcon from '@/assets/img/new-branch.svg?inline';

import { getMetaTags } from '@/seo';

@Component({
  components: {
    NewBranchIcon,
  },
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
