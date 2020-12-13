<template>
  <a
    target="_blank"
    :href="link"
    class="w-6 h-6 md:w-10 md:h-10 bg-transparent dark:text-gray-50 dark-hover:bg-blue-500 dark-hover:border-blue-500 text-gray-900 hover:bg-pink-500 hover:text-gray-50 hover:border-pink-500 rounded-full social-icon"
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
/* stylelint-disable */

.social-icon {
  padding: rem(4);
  transition-property: background-color, box-shadow;
  transition-duration: 300ms;

  &:hover {
    box-shadow: 0 0 0 rem(6) theme('colors.pink.100');
  }

  svg {
    transition-property: fill;
    transition-duration: 300ms;
    @apply fill-current;
  }
}

@screen md {
  .social-icon {
    padding: rem(10);
  }
}

html.dark-mode {
  .social-icon {
    &:hover {
      box-shadow: 0 0 0 rem(6) theme('colors.blue.600');
    }
  }
}

</style>
