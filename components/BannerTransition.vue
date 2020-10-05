<template>
  <Transition name="banner-fade">
    <slot />
  </Transition>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class BannerTransition extends Vue {}
</script>

<style lang="scss" scoped>
.banner-fade-enter {
  opacity: 0;
}

.banner-fade-enter-active {
  transition: 4s;
}

.banner-fade-enter-to {
  opacity: 1;
}

.banner-fade-leave {
  opacity: 0;
}

.banner-fade-leave-active {
  transition: 4s;
}

.banner-fade-leave-to {
  opacity: 1;
}
</style>
