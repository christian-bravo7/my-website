<template>
  <div class="absolute w-full h-full pointer-events-none">
    <figure
      class="absolute w-6 h-6 text-pink-800 dark:text-blue-700 figure figure--1"
      :class="currentRoute"
    >
      <TriangleSolid class="fill-current w-full h-full opacity-50 md:opacity-100" />
    </figure>
    <figure
      class="absolute w-6 h-6 text-pink-800 dark:text-blue-500 figure figure--2"
      :class="currentRoute"
    >
      <TriangleOutlined class="fill-current w-full h-full opacity-50 md:opacity-100" />
    </figure>
    <figure
      class="absolute w-6 h-6 text-pink-800 dark:text-blue-500 figure figure--3"
      :class="currentRoute"
    >
      <SquareOutlined class="fill-current w-full h-full opacity-50 md:opacity-100" />
    </figure>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TriangleSolid from '~/assets/img/triangle-solid.svg?inline';
import TriangleOutlined from '~/assets/img/triangle-outlined.svg?inline';
import SquareSolid from '~/assets/img/square-solid.svg?inline';
import SquareOutlined from '~/assets/img/square-outlined.svg?inline';

@Component({
  components: {
    TriangleSolid,
    TriangleOutlined,
    SquareSolid,
    SquareOutlined,
  },
})
export default class MovableFigures extends Vue {
  @Prop({ type: String, required: true })
  currentRoute!: string;
}
</script>

<style lang="scss" scoped>
.figure {
  $self: &;

  transition: color 200ms, top 6s, left 6s, transform 6s;

  &.index {
    &#{$self}--1 {
      top: 25%;
      left: 80%;
      transform: rotate(35deg);
    }
    &#{$self}--2 {
      top: 20%;
      left: 20%;
      transform: rotate(-35deg);
    }
    &#{$self}--3 {
      top: 80%;
      left: 60%;
      transform: rotate(100deg);
    }
  }

  &.me {
    &#{$self}--1 {
      top: 25%;
      left: 50%;
      transform: rotate(0deg);
    }
    &#{$self}--2 {
      top: 80%;
      left: 30%;
      transform: rotate(-100deg);
    }
    &#{$self}--3 {
      top: 50%;
      left: 75%;
      transform: rotate(-80deg);
    }
  }

  &.blog {
    &#{$self}--1 {
      top: 35%;
      left: 10%;
      transform: rotate(0deg);
    }
    &#{$self}--2 {
      top: 90%;
      left: 50%;
      transform: rotate(-100deg);
    }
    &#{$self}--3 {
      top: 20%;
      left: 85%;
      transform: rotate(-80deg);
    }
  }
}
</style>
