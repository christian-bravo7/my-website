<template>
  <footer class="py-16 px-4 bg-gray-800 dark:bg-gray-900">
    <div class="mx-auto container flex justify-center items-center flex-col">
      <div class="grid grid-cols-4 gap-x-6 mb-10">
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
      <p class="text-white text-xs">
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
