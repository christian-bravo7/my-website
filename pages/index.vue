<template>
  <section class="home">
    <Portal to="page-banner">
      <section class="text-banner">
        <h2 class="has-text-weight-bold text-banner__gretting">
          {{ $t('home.gretting') }}
        </h2>
        <h1 class="text-banner__description">
          <span class="is-block has-text-centered">
            {{ $t('home.iam-name-text') }}
          </span>
          <span class="is-block has-text-centered">
            {{ $t('home.iam-job-text') }}
          </span>
        </h1>
      </section>
    </Portal>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Portal } from 'portal-vue';

@Component({
  components: {
    Portal,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  background-color: var(--background);

  &__content {
    background-color: var(--background-secondary);
  }
}

.text-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__gretting {
    position: absolute;
    color: var(--text-light);
    font-size: 182px;
    user-select: none;
  }

  &__description {
    z-index: 1;
    color: var(--text);
    font-size: $size-1;
  }

  &--o {
    color: $pink-800;
  }
}

@include mobile {
  .text-banner {
    padding: rem(15);

    &__gretting {
      font-size: 20vw;
    }

    &__description {
      font-size: $size-4;
    }
  }
}

</style>
