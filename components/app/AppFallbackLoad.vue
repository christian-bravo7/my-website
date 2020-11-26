<template>
  <div
    class="fixed inset-0 z-50 flex justify-center items-center bg-white text-pink-800 dark:bg-blue-600 dark:text-blue-500 text-12xl"
  >
    <SiteLogo class="fill-current pulse-effect" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import SiteLogo from '~/assets/img/logo.svg?inline';

@Component({
  components: {
    SiteLogo,
  },
})
export default class AppFallbackLoad extends Vue {}
</script>

<style lang="scss" scoped>
.pulse-effect {
  animation-name: pulse;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
}
</style>
