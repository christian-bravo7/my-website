<template>
  <section class="fixed z-50 left-0 app-social-icons grid gap-3 grid-cols-1">
    <FooterSocialIcon
      link="https://codepen.io/christian-bravo"
    >
      <CodepenIcon />
    </FooterSocialIcon>
    <FooterSocialIcon
      link="https://github.com/christian-bravo7"
    >
      <GithubIcon />
    </FooterSocialIcon>
    <FooterSocialIcon
      link="https://www.instagram.com/christian.bravo_/"
    >
      <InstagramIcon />
    </FooterSocialIcon>
    <FooterSocialIcon
      link="https://www.linkedin.com/in/christian151-bravo/"
    >
      <LinkedinIcon />
    </FooterSocialIcon>
  </section>
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
export default class AppSocialIcons extends Vue {}

</script>

<style lang="scss" scoped>
.app-social-icons {
  position: fixed;
  bottom: rem(16);
  left: rem(16);
}
</style>
