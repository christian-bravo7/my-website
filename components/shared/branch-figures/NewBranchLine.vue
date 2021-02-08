<template>
  <NewBranchIcon class="block | w-14 h-24" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import NewBranchIcon from '@/assets/img/new-branch.svg?inline';

@Component({
  components: {
    NewBranchIcon,
  },
})
export default class NewBranchLine extends Vue {}
</script>
