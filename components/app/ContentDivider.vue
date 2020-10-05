<template>
  <section
    class="content-divider"
  >
    <div
      class="content-divider__section"
      :class="{ 'content-divider__section--hidden': second }"
    />
    <div
      class="content-divider__section"
      :class="{ 'content-divider__section--hidden': first }"
    />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ContentDivider extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly first!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly second!: boolean;
}
</script>

<style lang="scss" scoped>
.content-divider {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: rem(80);

  &__section {
    height: 100%;
    background-color: var(--text-light);

    &--hidden {
      opacity: 0;
    }
  }
}

@include mobile {
  .content-divider {
    height: rem(40);
  }
}
</style>
