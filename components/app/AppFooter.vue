<template>
  <footer class="home__content home__content--tertiary">
    <div class="social-media-section container">
      <div class="social-media-section__collection">
        <a
          target="_blank"
          href="https://codepen.io/christian-bravo"
          class="social-media-section__social-link"
        >
          <CodepenIcon />
        </a>
        <a
          target="_blank"
          href="https://github.com/christian-bravo7"
          class="social-media-section__social-link"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.instagram.com/christian.bravo_/"
          target="_blank"
          class="social-media-section__social-link"
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christian151-bravo/"
          class="social-media-section__social-link"
        >
          <LinkedinIcon />
        </a>
      </div>
      <p class="social-media-section__copyright-text">
        {{ $t('me.crafted-label') }} ❤️ | &copy; Christian Bravo
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import CodepenIcon from '~/assets/img/codepen.svg?inline';
import GithubIcon from '~/assets/img/github.svg?inline';
import InstagramIcon from '~/assets/img/instagram.svg?inline';
import LinkedinIcon from '~/assets/img/linkedin.svg?inline';

@Component({
  components: {
    CodepenIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
  },
})
export default class AppFooter extends Vue {}

</script>

<style lang="scss" scoped>

.social-media-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__copyright-text {
    color: var(--footer-text);
    font-size: rem(12);
  }

  &__collection {
    display: grid;
    grid-column-gap: rem(30);
    grid-template-columns: repeat(4, rem(25));
    margin-bottom: rem(42);
  }

  &__social-link {
    width: auto;

    > svg {
      transition: fill 250ms;
      fill: var(--footer-text);
    }

    &:hover {
      > svg {
        fill: var(--background);
      }
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

</style>
