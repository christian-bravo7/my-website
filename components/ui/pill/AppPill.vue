<template>
  <span
    class="py-1 px-2 text-xs font-bold mr-2 select-none capitalize rounded-full bg-pink-500 text-gray-50"
  >
    {{ text }}
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class AppPill extends Vue {
  @Prop({ type: String, required: true })
  readonly text!: string;
}
</script>
