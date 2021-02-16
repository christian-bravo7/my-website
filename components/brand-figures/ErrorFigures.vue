<template>
  <div
    style="z-index: -1;"
    class="absolute inset-0 | flex justify-center items-center | overflow-hidden pointer-events-none"
  >
    <figure
      v-for="index in 10"
      :key="index"
      :class="`absolute | opacity-50 | primary-text figure--${index}`"
    >
      <QuestionIcon class="w-full h-full | fill-current" />
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
export default class ErrorFigures extends Vue {}
</script>
