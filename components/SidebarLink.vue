<template>
  <div
    class="mb-4"
    @click="onClick"
    @keydown.enter="onKeydownEnter"
  >
    <NuxtLink
      class="text-pink-800 dark:text-blue-500 font-bold text-3xl"
      :to="localePath(...linkPath)"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

import { RawLocation } from 'vue-router/types';

@Component
export default class SidebarLink extends Vue {
  @Prop({ type: String, required: true })
  path!: string;

  @Prop({ type: Boolean, default: false })
  isOnlyEnglish!: boolean;

  @Emit('onKeydownEnter')
  onKeydownEnter (): void {}

  @Emit('onClick')
  onClick (): void {}

  get linkPath (): Array<RawLocation | string> {
    const path: RawLocation = { name: this.path };

    if (this.isOnlyEnglish) {
      return [path, 'en'];
    }

    return [path];
  }
}

</script>
