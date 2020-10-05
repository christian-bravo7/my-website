<template>
  <section class="text-banner">
    <h2 class="has-text-weight-bold text-banner__gretting">
      <span class="is-block has-text-centered">
        {{ $t('me.about-label') }}
      </span>
      <span class="is-block has-text-centered">
        {{ $t('me.me-label') }}
      </span>
    </h2>
    <h1 class="text-banner__description">
      <span class="is-block has-text-centered">
        {{ $t('me.simple-description') }}
      </span>
      </span>
    </h1>
  </section>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AboutMeBanner extends Vue {

}

</script>

<style lang="scss" scoped>
.text-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__gretting {
    position: absolute;
    color: var(--text-light);
    font-size: 182px;
    line-height: 1;
    user-select: none;
  }

  &__description {
    z-index: 1;
    max-width: rem(800);
    color: var(--text);
    font-size: $size-1;
  }
}

@include mobile {
  .who-iam-section {
    grid-template-columns: 1fr;

    &__asset {
      position: absolute;
      opacity: 0.2;
    }
  }

  .text-banner {
    padding: rem(15);

    &__gretting {
      font-size: 20vw;
    }

    &__description {
      font-size: $size-4;
    }
  }

  .skills-section {
    &__collection {
      grid-gap: rem(10) rem(5);
    }
  }
}
</style>
