<template>
  <section class="home">
    <section class="home__text-banner">
      <h2 class="has-text-weight-bold text-banner__gretting">
        Hello
      </h2>
      <h1 class="is-size-1 text-banner__description">
        <span class="is-block has-text-centered">
          I'm Christian Brav<span class="text-banner--o">o</span>
        </span>
        <span class="is-block has-text-centered">
          I'm Frontend developer
        </span>
      </h1>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  &__text-banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-banner {
    &__gretting {
      position: absolute;
      color: var(--text-light);
      font-size: 182px;
      letter-spacing: 8px;
      user-select: none;
    }

    &__description {
      z-index: 1;
      color: var(--text);
    }

    &--o {
      color: $pink-800;
    }
  }
}
</style>
