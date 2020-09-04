<template>
  <section class="home">
    <Portal to="page-banner">
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
    </Portal>
    <section class="home__divider-container">
      <div class="home__divider" />
      <div class="home__divider home__divider--upper" />
    </section>
    <section class="home__content home__content--secondary">
      <div class="who-iam-section container">
        <div class="content is-medium">
          <h1 class="who-iam-section__title">
            {{ $t('me.about-me-label') }}
          </h1>
          <p>
            {{ $t('me.about-me-description') }}
          </p>
        </div>
        <div class="who-iam-section__asset">
          <RemolinoLogo />
        </div>
      </div>
    </section>
    <section class="home__divider-container">
      <div class="home__divider home__divider--down" />
      <div class="home__divider" />
    </section>
    <section class="home__content">
      <div class="skills-section container">
        <h2 class="has-text-centered has-text-weight-bold skills-section__title">
          {{ $t('me.skills-label') }}
        </h2>
        <div class="skills-section__collection">
          <div class="skills-section__icon">
            <HtmlIcon />
            <span>
              HTML5
            </span>
          </div>
          <div class="skills-section__icon">
            <CssIcon />
            <span>
              CSS3
            </span>
          </div>
          <div class="skills-section__icon">
            <SassIcon />
            <span>
              SASS
            </span>
          </div>
          <div class="skills-section__icon">
            <NuxtIcon />
            <span>
              Nuxt.js
            </span>
          </div>
          <div class="skills-section__icon">
            <ReactIcon />
            <span>
              React.js
            </span>
          </div>
          <div class="skills-section__icon">
            <VueIcon />
            <span>
              Vue.js
            </span>
          </div>
          <div class="skills-section__icon">
            <TypescriptIcon />
            <span>
              Typescript
            </span>
          </div>
          <div class="skills-section__icon">
            <JavascriptIcon />
            <span>
              Javascript
            </span>
          </div>
          <div class="skills-section__icon">
            <NodeIcon />
            <span>
              Node.js
            </span>
          </div>
          <div class="skills-section__icon">
            <GraphqlIcon />
            <span>
              GraphQL
            </span>
          </div>
          <div class="skills-section__icon">
            <GitIcon />
            <span>
              Git
            </span>
          </div>
          <div class="skills-section__icon">
            <JestIcon />
            <span>
              Jest
            </span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Portal } from 'portal-vue';

import RemolinoLogo from '~/assets/img/remolino.svg?inline';
import CssIcon from '~/assets/img/css3.svg?inline';
import JavascriptIcon from '~/assets/img/javascript.svg?inline';
import NuxtIcon from '~/assets/img/nuxt-dot-js.svg?inline';
import ReactIcon from '~/assets/img/react.svg?inline';
import VueIcon from '~/assets/img/vue-dot-js.svg?inline';
import TypescriptIcon from '~/assets/img/typescript.svg?inline';
import NodeIcon from '~/assets/img/node-dot-js.svg?inline';
import GraphqlIcon from '~/assets/img/graphql.svg?inline';
import GitIcon from '~/assets/img/git.svg?inline';
import SassIcon from '~/assets/img/sass.svg?inline';
import JestIcon from '~/assets/img/jest.svg?inline';
import HtmlIcon from '~/assets/img/html5.svg?inline';

@Component({
  components: {
    Portal,
    RemolinoLogo,
    CssIcon,
    JavascriptIcon,
    NuxtIcon,
    ReactIcon,
    VueIcon,
    TypescriptIcon,
    GraphqlIcon,
    GitIcon,
    SassIcon,
    JestIcon,
    HtmlIcon,
    NodeIcon,
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
    padding: rem(92) rem(24);
    background-color: var(--background);

    &--secondary {
      background-color: var(--text-light);
    }
  }

  &__divider-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__divider {
    height: rem(30);
    background-color: var(--background);

    &--down {
      transform: translateY(-30px);
    }

    &--upper {
      transform: translateY(30px);
    }
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
    line-height: 1;
    letter-spacing: 8px;
    user-select: none;
  }

  &__description {
    z-index: 1;
    max-width: rem(800);
    color: var(--text);
    font-size: $size-1;
  }
}

.who-iam-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--text);

  &__title {
    color: var(--asset-highlight);
    font-size: rem(48);
  }

  p {
    line-height: 1.8;
  }

  &__asset {
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 90%;
      max-height: rem(300);
    }
  }
}

.skills-section {
  display: grid;
  grid-template-columns: 1fr;

  &__title {
    margin-bottom: rem(24);
    color: var(--text);
    font-size: rem(48);
  }

  &__collection {
    display: grid;
    grid-gap: rem(25);
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-items: center;
    padding: rem(24) 0;
  }

  &__icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: rem(8);
    transition: box-shadow 250ms;

    > span {
      margin-top: rem(8);
      color: var(--text-light);
      font-weight: $weight-bold;
      font-size: $size-5;
      transition: color 250ms;
    }

    > svg {
      width: rem(50);
      fill: var(--asset-highlight);
    }

    &:hover {
      box-shadow: $box-shadow;

      > span {
        color: var(--asset-highlight);
      }
    }
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
    &__gretting {
      font-size: 25vw;
      transform: rotate(-45deg);
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
