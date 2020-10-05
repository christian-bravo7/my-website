<template>
  <section class="section home__content--secondary min-screen who-iam-section">
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
    margin-top: rem(120);
    font-size: rem(18);
    line-height: 2;
  }

  &__title {
    position: absolute;
    top: 0;
    width: 100%;
    color: var(--asset-highlight);
    font-weight: bold;
    font-size: rem(182);
    line-height: 1;
    opacity: 0.5;
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

.home {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  background-color: var(--background);

  &__content {
    padding: rem(92) rem(24);
    background-color: var(--background);

    &--secondary {
      background-color: var(--text-light);
    }

    &--tertiary {
      background-color: var(--background-footer);
    }
  }
}

@include mobile {
  .who-iam-section {
    &__container {
      grid-template-columns: 1fr;
    }

    &__asset {
      display: none;
    }
  }
}

</style>
