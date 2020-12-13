<template>
  <section class="min-h-screen py-20 px-4">
    <div class="container mx-auto flex flex-col">
      <h2 class="text-center mb-8 text-6xl sm:text-8xl md:text-10xl break-all font-bold about-me-skills__title">
        {{ $t('me.skills-label') }}
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
        <SkillIcon
          v-for="({ name, component }, index) in skills"
          :key="index"
          :name="name"
        >
          <Component :is="component" />
        </SkillIcon>
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
    { name: 'CSS3', component: CssIcon },
    { name: 'Javascript', component: JavascriptIcon },
    { name: 'NuxtJS', component: NuxtIcon },
    { name: 'VueJS', component: VueIcon },
    { name: 'ReactJS', component: ReactIcon },
    { name: 'Typescript', component: TypescriptIcon },
    { name: 'Git', component: GitIcon },
    { name: 'SASS', component: SassIcon },
    { name: 'Jest', component: JestIcon },
    { name: 'HTML5', component: HtmlIcon },
    { name: 'NodeJS', component: NodeIcon },
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
