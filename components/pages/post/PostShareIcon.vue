<template>
  <a
    target="_blank"
    :href="link"
    class="w-8 h-8 md:w-12 md:h-12 | p-1 | text-gray-50 hover:text-gray-50 | bg-transparent hover:bg-pink-500 | hover:border-pink-500 | rounded-full | social-icon"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class PostShareIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly link!: string;
}
</script>

<style lang="scss" scoped>
.social-icon {
  transition-duration: 300ms;
  transition-property: background-color, box-shadow;

  &:hover {
    box-shadow: 0 0 0 6px theme('colors.pink.200');
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
</style>
