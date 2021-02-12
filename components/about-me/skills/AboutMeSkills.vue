<template>
  <section class="section-container">
    <div class="container | flex | my-0 mx-auto">
      <div class="flex flex-col | w-full">
        <h2 class="mb-8 | text-center break-all | section-title about-me-skills__title">
          {{ $t('me.skills-label') }}
        </h2>
        <div class="flex justify-center items-center | flex-1">
          <div class="flex flex-wrap justify-center | max-w-screen-lg">
            <SkillIcon
              v-for="({ name, component }, index) in skills"
              :key="index"
              :name="name"
              class="m-2"
            >
              <Component :is="component" />
            </SkillIcon>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import CssIcon from '~/assets/img/css3.svg?inline';
import JavascriptIcon from '~/assets/img/javascript.svg?inline';
import NuxtIcon from '~/assets/img/nuxt-dot-js.svg?inline';
import ReactIcon from '~/assets/img/react.svg?inline';
import VueIcon from '~/assets/img/vue-dot-js.svg?inline';
import TypescriptIcon from '~/assets/img/typescript.svg?inline';
import NodeIcon from '~/assets/img/node-dot-js.svg?inline';
import GitIcon from '~/assets/img/git.svg?inline';
import SassIcon from '~/assets/img/sass.svg?inline';
import JestIcon from '~/assets/img/jest.svg?inline';
import HtmlIcon from '~/assets/img/html5.svg?inline';

@Component({
  components: {
    CssIcon,
    JavascriptIcon,
    NuxtIcon,
    ReactIcon,
    VueIcon,
    TypescriptIcon,
    GitIcon,
    SassIcon,
    JestIcon,
    HtmlIcon,
    NodeIcon,
  },
})
export default class AboutMeSkills extends Vue {
  skills: Array<{ name: string, component: any }> = [
    { name: 'Javascript', component: JavascriptIcon },
    { name: 'Typescript', component: TypescriptIcon },
    { name: 'NuxtJS', component: NuxtIcon },
    { name: 'VueJS', component: VueIcon },
    { name: 'ReactJS', component: ReactIcon },
    { name: 'NodeJS', component: NodeIcon },
    { name: 'Git', component: GitIcon },
    { name: 'Jest', component: JestIcon },
    { name: 'SASS', component: SassIcon },
    { name: 'CSS3', component: CssIcon },
    { name: 'HTML5', component: HtmlIcon },
  ]
}
</script>

<style lang="scss" scoped>
.about-me-skills {
  &__title {
    @extend .gradient-one;
  }
}

html.dark-mode {
  .about-me-skills {
    &__title {
      @extend .gradient-two;
    }
  }
}
</style>
