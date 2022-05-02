<template>
  <section class="flex justify-center items-center">
    <div class="grid gap-6 grid-cols-4 md:grid-cols-2 lg:grid-cols-4 page-social-icons">
      <SocialNetworkIcon
        v-for="({ link, component }, index) in socialMediaIcons"
        :key="index"
        :link="link"
      >
        <Component :is="component" />
      </SocialNetworkIcon>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CodepenIcon from '~/assets/img/codepen.svg?inline';
import GithubIcon from '~/assets/img/github.svg?inline';
import InstagramIcon from '~/assets/img/instagram.svg?inline';
import LinkedinIcon from '~/assets/img/linkedin.svg?inline';
import { SocialMediaIcon } from '@/types/social-media.types';

@Component({
  components: {
    CodepenIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
  },
})
export default class MySocialNetworks extends Vue {
  socialMediaIcons: Array<SocialMediaIcon> = [
    { link: 'https://codepen.io/christian-bravo', component: CodepenIcon },
    { link: 'https://github.com/christian-bravo7', component: GithubIcon },
    { link: 'https://www.instagram.com/christian.bravo_/', component: InstagramIcon },
    { link: 'www.linkedin.com/in/bravo-christian', component: LinkedinIcon },
  ]
}
</script>
