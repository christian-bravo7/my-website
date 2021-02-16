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
      <GearIcon class="w-full h-full | fill-current" />
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import GearIcon from '~/assets/img/gear.svg?inline';

@Component({
  components: {
    GearIcon,
  },
})
export default class WipFigures extends Vue {}
</script>
