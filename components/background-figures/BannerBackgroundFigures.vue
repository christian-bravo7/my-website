<template>
  <div class="hidden md:block absolute overflow-hidden w-full h-full pointer-events-none">
    <span class="banner-figure">
      <CircleIcon
        class="absolute w-6 h-6 banner-figure__icon banner-figure__icon--1 fill-current"
        :class="currentRoute"
      />
    </span>
    <span class="banner-figure">
      <CircleIcon
        class="absolute w-7 h-7 banner-figure__icon banner-figure__icon--2 fill-current"
        :class="currentRoute"
      />
    </span>
    <span class="banner-figure">
      <CircleIcon
        class="absolute w-8 h-8 banner-figure__icon banner-figure__icon--3 fill-current"
        :class="currentRoute"
      />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import CircleIcon from '~/assets/img/circle-outline.svg?inline';

@Component({
  components: {
    CircleIcon,
  },
})
export default class BannerBackgroundFigures extends Vue {
  get currentRoute (): string {
    const route = this.getRouteBaseName();
    return route;
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/font.scss";

.banner-figure {
  @apply primary-text;
  @apply text-opacity-30;

  &__icon {
    $self: &;

    transition: color 200ms, top 6s, left 6s, transform 6s;

    &.index {
      &#{$self}--1 {
        top: 30%;
        left: 92%;
      }

      &#{$self}--2 {
        top: 20%;
        left: 10%;
      }

      &#{$self}--3 {
        top: 80%;
        left: 60%;
      }
    }

    &.me {
      &#{$self}--1 {
        top: 20%;
        left: 80%;
      }

      &#{$self}--2 {
        top: 50%;
        left: 10%;
      }

      &#{$self}--3 {
        top: 90%;
        left: 70%;
      }
    }

    &.blog {
      &#{$self}--1 {
        top: 10%;
        left: 88%;
      }

      &#{$self}--2 {
        top: 60%;
        left: 5%;
      }

      &#{$self}--3 {
        top: 94%;
        left: 50%;
      }
    }
  }
}
</style>
