<template>
  <section class="section-container">
    <div class="max-w-screen-lg | flex justify-center | my-0 mx-auto">
      <div class="about-me-information__content">
        <div class="mb-4 md:mb-0">
          <h2 class="mb-8 | section-title about-me-information__title">
            {{ $t('me.about-me-label') }}
          </h2>
          <ClientOnly>
            <p
              class="font-base | about-me-information__description"
              v-html="$md($t('me.about-me-description'))"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AboutMeInformation extends Vue {}
</script>

<style lang="scss" scoped>
.about-me-information {
  &__content {
    @apply grid grid-cols-1 lg:gap-12 items-center;
  }

  &__title {
    @include theme-gradients(one, two);
  }

  /* stylelint-disable */
  &__description {
    :deep(p) {
      @apply mb-4;
    }
  }
}

@screen lg {
  .about-me-information {
    &__content {
      grid-template-columns: 2fr 1fr;
    }
  }
}
</style>
