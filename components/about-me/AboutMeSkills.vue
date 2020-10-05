<template>
  <section class="section min-screen skills-section">
    <div class="skills-section__container container">
      <h2 class="has-text-centered skills-section__title">
        {{ $t('me.skills-label') }}
      </h2>
      <div class="skills-section__collection">
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
        <SkillIcon name="GraphQL">
          <GraphqlIcon />
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

<style lang="scss" scoped>
.skills-section {
  display: flex;
  align-items: center;

  &__container {
    display: grid;
    grid-template-columns: 1fr;
  }

  &__title {
    margin-bottom: rem(24);
    color: var(--text-light);
    font-weight: bold;
    font-size: rem(182);
    word-break: break-word;
  }

  &__collection {
    display: grid;
    grid-gap: rem(25);
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-items: center;
    padding: rem(24) 0;
  }
}

.home {
  &__content {
    padding: rem(92) rem(24);
    background-color: var(--background);

    &--secondary {
      background-color: var(--text-light);
    }

    &--tertiary {
      background-color: var(--background-footer);
    }
  }
}

@include mobile {
  .skills-section {
    &__title {
      font-size: rem(70);
    }

    &__collection {
      grid-gap: rem(10) rem(5);
    }
  }
}
</style>
