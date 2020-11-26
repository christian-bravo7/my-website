<template>
  <a
    target="_blank"
    :href="link"
    class="w-10 h-10 bg-transparent dark:text-gray-50 dark-hover:bg-blue-500 dark-hover:border-blue-500 text-gray-900 hover:bg-pink-800 hover:text-gray-50 hover:border-pink-800 social-icon rounded-full transition-colors duration-200"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class SocialIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly link!: string;
}
</script>

<style lang="scss" scoped>
$light-color: #C5075D;
$dark-color: #5171FF;

.social-icon {
  padding: rem(10);

  &:hover {
    box-shadow: 0 0 0 5px rgba($light-color, 0.2);
  }

  svg {
    @apply fill-current;
  }
}

html.dark-mode {
  .social-icon {
    &:hover {
      box-shadow: 0 0 0 5px rgba($dark-color, 0.2);
    }
  }
}

</style>
