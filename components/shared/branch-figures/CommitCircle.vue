<template>
  <div class="block | w-4 h-4">
    <CircleOutline class="w-full h-full" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import CircleOutline from '@/assets/img/circle-outline.svg?inline';

@Component({
  components: {
    CircleOutline,
  },
})
export default class CommitCircle extends Vue {}
</script>
