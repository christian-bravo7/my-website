<template>
  <section class="error">
    <section class="flex flex-col items-center justify-center">
      <h1 class="text-7xl md:text-8xl text-gray-900 dark:text-gray-50">
        Oops!
      </h1>
      <p class="text-xl md:text-3xl text-center mb-8 text-gray-900 dark:text-gray-50">
        {{ $t('error.404-description') }}
      </p>
      <NuxtLink
        class="px-6 py-4 text-base md:text-lg rounded-full bg-pink-800 dark:bg-blue-500 text-white"
        :to="localePath('index')"
      >
        {{ $t('error.home-link') }}
      </NuxtLink>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'error-layout',
})
export default class ErrorPage extends Vue {}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__title {
    font-size: em(64);
  }

  &__description {
    display: flex;
    justify-content: center;
    margin-bottom: rem(24);
    font-size: em(24);
    line-height: 2;
  }

  &__home-link {
    display: inline-block;
    padding: rem(8) rem(16);
    text-decoration: none;
    border: 1px solid var(--secondary);
    border-radius: rem(40);

    &:hover {
      color: white;
      background-color: var(--secondary);
    }
  }

  &__information {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__picture {
    flex: 1;
  }

  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>
