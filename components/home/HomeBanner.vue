<template>
  <AppBanner>
    <template #primary-text>
      <span
        class="block | text-center"
      >
        {{ $t('home.iam-name-text') }}
      </span>
      <span
        class="block | text-center | home-banner__description"
        v-html="$md($t('home.iam-job-text'))"
      />
    </template>
    <template #secondary-text>
      {{ $t(homeGreetingKey) }}
    </template>
  </AppBanner>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { greetingByHour } from '@/utils/date/greetingByHour';

@Component
export default class HomeBanner extends Vue {
  get homeGreetingKey (): string {
    const greetingKey = greetingByHour();
    return `greeting.${greetingKey}`;
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  &__description {
    /deep/ strong {
      font-weight: normal;

      @include theme-gradients (one, two);
    }
  }
}
</style>
