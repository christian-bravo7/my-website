<template>
  <section class="fixed z-40 left-0 grid gap-3 grid-cols-1 page-social-icons">
    <SocialIcon
      v-for="({ link, component }, index) in socialMediaIcons"
      :key="index"
      :link="link"
    >
      <Component :is="component" />
    </SocialIcon>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import { SocialMediaIcon } from '@/components/about-me/social-media/types';

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
export default class AppSocialIcons extends Vue {
  socialMediaIcons: Array<SocialMediaIcon> = [
    { link: 'https://codepen.io/christian-bravo', component: CodepenIcon },
    { link: 'https://github.com/christian-bravo7', component: GithubIcon },
    { link: 'https://www.instagram.com/christian.bravo_/', component: InstagramIcon },
    { link: 'https://www.linkedin.com/in/christian151-bravo/', component: LinkedinIcon },
  ]
}
</script>

<style lang="scss" scoped>
.page-social-icons {
  bottom: 4px;
  left: 4px;
}

@screen md {
  .page-social-icons {
    bottom: 12px;
    left: 12px;
  }
}
</style>
