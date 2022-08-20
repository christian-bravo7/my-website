<template>
  <div class="flex">
    <SocialNetworkIcon
      v-for="({ component, link }, index) in socialMediaIcons"
      :key="index"
      class="ml-4 | text-gray-50"
      :link="link"
    >
      <component :is="component" />
    </SocialNetworkIcon>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

import LinkedinIcon from '~/assets/img/linkedin.svg?inline';
import FacebookIcon from '~/assets/img/facebook.svg?inline';
import TwitterIcon from '~/assets/img/twitter.svg?inline';

@Component({
  components: {
    LinkedinIcon,
    FacebookIcon,
    TwitterIcon,
  },
})
export default class PostShareWithSocialNetworks extends Vue {
  @Prop()
  readonly postInformation!: any;

  socialMediaIcons: Array<any> = [
    { link: `https://www.linkedin.com/sharing/share-offsite/?url=${this.postInformation.url}`, component: LinkedinIcon },
    { link: `https://www.twitter.com/intent/tweet?url=${this.postInformation.url}&text=${this.postInformation.title}`, component: TwitterIcon },
  ];
}

// onclick="window.open(this.href,'targetWindow','toolbars=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=640,height=320,left=200,top=200');return false;"

</script>
