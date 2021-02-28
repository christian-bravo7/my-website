<template>
  <div
    class="mb-4"
    @click="click"
    @keydown.enter="onKeydownEnter"
  >
    <NuxtLink
      class="primary-text font-bold text-3xl"
      :to="localePath(...linkPath)"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, mixins } from 'nuxt-property-decorator';

import LinkEnglishPath from '@/components/app/navigation/LinkEnglishPath';

@Component
export default class SidebarLink extends mixins(Vue, LinkEnglishPath) {
  @Emit('onKeydownEnter')
  onKeydownEnter (): void {}

  @Emit('click')
  click (): void {}
}
</script>
