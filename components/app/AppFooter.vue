<template>
  <footer class="section bg-tertiary">
    <div class="social-media-section container">
      <div class="social-media-section__collection">
        <FooterSocialIcon link="https://codepen.io/christian-bravo">
          <CodepenIcon />
        </FooterSocialIcon>
        <FooterSocialIcon link="https://github.com/christian-bravo7">
          <GithubIcon />
        </FooterSocialIcon>
        <FooterSocialIcon link="https://www.instagram.com/christian.bravo_/">
          <InstagramIcon />
        </FooterSocialIcon>
        <FooterSocialIcon link="https://www.linkedin.com/in/christian151-bravo/">
          <LinkedinIcon />
        </FooterSocialIcon>
      </div>
      <p class="social-media-section__copyright-text">
        {{ $t('me.crafted-label') }} <span
          role="img"
          aria-label="heart"
        >❤️</span> | &copy; Christian Bravo
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
}
</style>
