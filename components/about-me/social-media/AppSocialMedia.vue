<template>
  <section class="flex justify-center items-center">
    <div class="grid gap-6 grid-cols-4 md:grid-cols-2 lg:grid-cols-4 page-social-icons">
      <SocialIcon
        v-for="({ link, component }, index) in socialMediaIcons"
        :key="index"
        :link="link"
      >
        <Component :is="component" />
      </SocialIcon>
    </div>
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
