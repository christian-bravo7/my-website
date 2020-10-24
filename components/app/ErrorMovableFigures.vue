<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
    <figure
      v-for="index in 10"
      :key="index"
      :class="`text-pink-800 dark:text-blue-500 opacity-50 absolute figure--${index}`"
    >
      <QuestionIcon class="w-full h-full fill-current" />
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import QuestionIcon from '~/assets/img/question-icon.svg?inline';

@Component({
  components: {
    QuestionIcon,
  },
})
export default class ErrorMovableFigures extends Vue {}
</script>

<style lang="scss" scoped>
/* stylelint-disable */

// @for $i from 1 through 100 {
//   .figure--#{$i}) {
//     display: flex;
//     align-items: flex-start;
//     height: $i * 1 + rem;
//     transform: rotate($i * 15deg);

//     svg {
//       opacity: 0.15;
//       width: $i * 1.5 + px;
//       height: $i * 1.5 + px;
//     }
//   }
// }

.figure {
  &--1 {
    @apply w-12 h-12;
    top: 5%;
    left: 10%;
    transform: rotate(35deg);
  }
  &--2 {
    @apply w-12 h-12 hidden;
    top: 10%;
    left: 35%;
    transform: rotate(5deg);

    @screen md {
      @apply block;
    }
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
    @apply w-20 h-20 hidden;
    top: 65%;
    left: 75%;
    transform: rotate(-15deg);

    @screen md {
      @apply block;
    }
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
    @apply w-40 h-40 hidden;
    top: 5%;
    left: 90%;
    transform: rotate(35deg);

    @screen md {
      @apply block;
    }
  }
  &--10 {
    @apply w-48 h-48;
    top: 35%;
    left: 4%;
    transform: rotate(-25deg);
  }
}

</style>
