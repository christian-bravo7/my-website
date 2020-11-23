<template>
  <svg
    v-if="inverse"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    class="text-gray-200 dark:text-blue-700"
  ><path
    fill="currentColor"
    fill-opacity="1"
    d="M0,128L360,192L720,96L1080,128L1440,32L1440,0L1080,0L720,0L360,0L0,0Z"
  /></svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    class="text-gray-200 dark:text-blue-700"
  ><path
    fill="currentColor"
    fill-opacity="1"
    d="M0,192L360,160L720,96L1080,224L1440,224L1440,320L1080,320L720,320L360,320L0,320Z"
  /></svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ContentDivider extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly inverse!: boolean;
}
</script>
