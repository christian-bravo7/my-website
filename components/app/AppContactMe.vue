<template>
  <section class="py-40 px-4 | text-black dark:text-white | contact-me">
    <div class="container | my-0 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex flex-col | mb-12 md:mb-0">
          <h3 class="mb-4 | section-title contact-me__title">
            {{ $t('contact-me.say-hi') }}
          </h3>
          <p class="mb-14 mr-0 md:mr-8 md:mb-20 | text-sm md:text-lg | leading-7 md:leading-loose">
            {{ $t('contact-me.contact-me-description') }}
          </p>
          <div class="flex flex-col items-start">
            <span class="mb-2 | text-xs">
              {{ $t('contact-me.email-me') }}
            </span>
            <a
              class="font-bold | text-sm md:text-lg"
              href="mailto:hi@christian-bravo.dev"
            >
              hi@christian-bravo.dev
            </a>
          </div>
        </div>
        <AppSocialMedia />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppContactMe extends Vue {}
</script>

<style lang="scss" scoped>
.contact-me {
  &__title {
    @include theme-gradients(one, two);
  }
}
</style>
