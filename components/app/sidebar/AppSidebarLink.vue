<template>
  <div
    class="mb-4"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <NuxtLink
      class="primary-text font-bold mb-4 text-3xl"
      :to="to"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class AppSidebarLink extends Vue {
  @Prop({ type: [String, Object], required: true })
  readonly to!: [string, object];
}
</script>
