<template>
  <div class="hidden md:block absolute overflow-hidden w-full h-full pointer-events-none">
    <span class="text-pink-500 dark:text-blue-500 text-opacity-30 dark:text-opacity-30">
      <CircleIcon
        class="absolute w-6 h-6 movable-figure movable-figure--1 fill-current"
        :class="currentRoute"
      />
    </span>
    <span class="text-pink-500 dark:text-blue-500 text-opacity-30 dark:text-opacity-30">
      <CircleIcon
        class="absolute w-7 h-7 movable-figure movable-figure--2 fill-current"
        :class="currentRoute"
      />
    </span>
    <span class="text-pink-500 dark:text-blue-500 text-opacity-30 dark:text-opacity-30">
      <CircleIcon
        class="absolute w-8 h-8 movable-figure movable-figure--3 fill-current"
        :class="currentRoute"
      />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import CircleIcon from '~/assets/img/circle-outline.svg?inline';

@Component({
  components: {
    CircleIcon,
  },
})
export default class BannerBackgroundFigures extends Vue {
  @Prop({ type: String, required: true })
  currentRoute!: string;
}
</script>

<style lang="scss" scoped>
.movable-figure {
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

</style>
