<template>
  <div
    class="absolute inset-0 | flex justify-center items-center | overflow-hidden pointer-events-none | random-figures"
  >
    <figure
      v-for="index in 10"
      :key="index"
      :class="`absolute | opacity-25 | primary-text figure figure--${index}`"
    >
      <Component
        :is="figureComponent"
        class="w-full h-full | fill-current"
      />
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class GenericBackgroundFigures extends Vue {
  @Prop({ type: [Function, String, Object as () => Vue], default: 'div' })
  readonly figureComponent!: string | Vue | Function;
}
</script>

<style lang="scss" scoped>
.random-figures {
  z-index: -1;
}

.figure {
  &--1 {
    @apply w-12 h-12;

    top: 5%;
    left: 10%;
    transform: rotate(35deg);
  }

  &--2 {
    @apply w-12 h-12 hidden md:block;

    top: 10%;
    left: 35%;
    transform: rotate(5deg);
  }

  &--3 {
    @apply w-12 h-12;

    top: 90%;
    left: 50%;
    transform: rotate(0deg);
  }

  &--4 {
    @apply w-12 h-12;

    top: 80%;
    left: 0%;
    transform: rotate(45deg);
  }

  &--5 {
    @apply w-16 h-16;

    top: 20%;
    left: 80%;
    transform: rotate(25deg);
  }

  &--6 {
    @apply w-20 h-20 hidden md:block;

    top: 65%;
    left: 75%;
    transform: rotate(-15deg);
  }

  &--7 {
    @apply w-24 h-24;

    top: 65%;
    left: 90%;
    transform: rotate(20deg);
  }

  &--8 {
    @apply w-32 h-32;

    top: 95%;
    left: 20%;
    transform: rotate(15deg);
  }

  &--9 {
    @apply w-40 h-40 hidden md:block;

    top: 5%;
    left: 90%;
    transform: rotate(35deg);
  }

  &--10 {
    @apply w-48 h-48;

    top: 35%;
    left: 4%;
    transform: rotate(-25deg);
  }
}
</style>
