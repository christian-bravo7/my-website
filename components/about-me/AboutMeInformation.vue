<template>
  <section class="section bg-secondary min-screen who-iam-section">
    <div class="who-iam-section__container container">
      <div class="who-iam-section__content is-medium">
        <h1 class="who-iam-section__title">
          {{ $t('me.i-label') }}
        </h1>
        <p class="who-iam-section__description">
          {{ $t('me.about-me-description') }}
        </p>
      </div>
      <div class="who-iam-section__asset">
        <RemolinoLogo />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import RemolinoLogo from '~/assets/img/remolino.svg?inline';

@Component({
  components: {
    RemolinoLogo,
  },
})
export default class AboutMeInformation extends Vue {}

</script>

<style lang="scss" scoped>
.who-iam-section {
  display: flex;
  align-items: center;

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--text);
  }

  &__content {
    position: relative;
  }

  &__description {
    position: relative;
    z-index: 2;
    font-size: rem(18);
    line-height: 2;
  }

  &__title {
    width: 100%;
    color: var(--asset-highlight);
    font-weight: bold;
    font-size: rem(110);
    line-height: 1;
  }

  &__asset {
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 90%;
      max-height: rem(300);
      fill: var(--asset-highlight);
    }
  }
}

@include mobile {
  .who-iam-section {
    &__container {
      grid-template-columns: 1fr;
    }

    &__title {
      font-size: rem(40);
    }

    &__description {
      font-size: rem(16);
    }

    &__asset {
      display: none;
    }
  }
}

</style>
