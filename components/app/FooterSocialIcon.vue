<template>
  <a
    target="_blank"
    :href="link"
    class="footer-social-icon"
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
  width: auto;

  > svg {
    transition: fill 250ms;
    fill: var(--footer-text);
  }

  &:hover {
    > svg {
      fill: var(--background);
    }
  }
}
</style>
