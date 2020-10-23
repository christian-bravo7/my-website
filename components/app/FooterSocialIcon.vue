<template>
  <a
    target="_blank"
    :href="link"
    class="w-6 h-6 text-white footer-social-icon"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class FooterSocialIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly link!: string;
}
</script>

<style lang="scss" scoped>
.footer-social-icon {
  > svg {
    @apply fill-current;
  }
}
</style>
