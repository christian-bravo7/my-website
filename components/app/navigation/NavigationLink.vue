<template>
  <NuxtLink
    class="text-center text-pink-800 dark:text-blue-500 mx-8"
    exact-active-class="font-bold"
    :to="localePath(...linkPath)"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

import { RawLocation } from 'vue-router/types';

@Component
export default class NavigationLink extends Vue {
  @Prop({ type: String, required: true })
  readonly path!: string;

  @Prop({ type: Boolean, default: false })
  readonly isOnlyEnglish!: boolean;

  get linkPath (): Array<RawLocation | string> {
    const path: RawLocation = { name: this.path };

    if (this.isOnlyEnglish) {
      return [path, 'en'];
    }

    return [path];
  }
}
</script>
