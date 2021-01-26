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
      {{ $t('home.gretting') }}
    </template>
  </AppBanner>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class HomeBanner extends Vue {}
</script>

<style lang="scss" scoped>
.home-banner {
  &__description {
    /deep/ strong {
      font-weight: normal;

      @extend .gradient-one;
    }
  }
}

html.dark-mode {
  .home-banner {
    &__description {
      /deep/ strong {
        font-weight: normal;

        @extend .gradient-five;
      }
    }
  }
}
</style>
