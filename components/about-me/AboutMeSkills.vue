<template>
  <section class="min-h-screen py-20 px-4">
    <div class="container mx-auto flex flex-col">
      <h2 class="text-center mb-8 text-6xl sm:text-8xl md:text-10xl break-all font-bold text-gray-300 dark:text-blue-700">
        {{ $t('me.skills-label') }}
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <SkillIcon name="HTML5">
          <HtmlIcon />
        </SkillIcon>
        <SkillIcon name="CSS3">
          <CssIcon />
        </SkillIcon>
        <SkillIcon name="SASS">
          <SassIcon />
        </SkillIcon>
        <SkillIcon name="Nuxt.js">
          <NuxtIcon />
        </SkillIcon>
        <SkillIcon name="React.js">
          <ReactIcon />
        </SkillIcon>
        <SkillIcon name="Vue.js">
          <VueIcon />
        </SkillIcon>
        <SkillIcon name="Typescript">
          <TypescriptIcon />
        </SkillIcon>
        <SkillIcon name="Javascript">
          <JavascriptIcon />
        </SkillIcon>
        <SkillIcon name="Node.js">
          <NodeIcon />
        </SkillIcon>
        <SkillIcon name="Git">
          <GitIcon />
        </SkillIcon>
        <SkillIcon name="Jest">
          <JestIcon />
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
import GraphqlIcon from '~/assets/img/graphql.svg?inline';
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
    GraphqlIcon,
    GitIcon,
    SassIcon,
    JestIcon,
    HtmlIcon,
    NodeIcon,
  },
})
export default class AboutMeSkills extends Vue {}

</script>
