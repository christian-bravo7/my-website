<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppSelectOption extends Vue {}
</script>
