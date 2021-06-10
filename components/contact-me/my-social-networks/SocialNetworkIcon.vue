<template>
  <a
    target="_blank"
    :href="link"
    class="w-8 h-8 md:w-12 md:h-12 | p-1 | bg-transparent dark:text-gray-50 dark-hover:bg-blue-500 dark-hover:border-blue-500 text-gray-900 hover:bg-pink-500 hover:text-gray-50 hover:border-pink-500 rounded-full social-icon"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class SocialNetworkIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly link!: string;
}
</script>

<style lang="scss" scoped>
.social-icon {
  transition-duration: 300ms;
  transition-property: background-color, box-shadow;

  &:hover {
    box-shadow: 0 0 0 6px theme('colors.pink.100');
  }

  svg {
    transition-duration: 300ms;
    transition-property: fill;

    @apply fill-current;
  }
}

@screen md {
  .social-icon {
    padding: 10px;
  }
}

@include dark-mode {
  .social-icon {
    &:hover {
      box-shadow: 0 0 0 6px theme('colors.blue.600');
    }
  }
}
</style>
