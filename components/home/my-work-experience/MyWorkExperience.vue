<template>
  <section class="section-container">
    <div class="max-w-screen-lg | flex justify-center items-center | my-0 mx-auto | overflow-x-hidden">
      <div class="flex flex-col | w-full">
        <div class="flex justify-center | mb-16">
          <h2 class="section-title my-work-experience__title">
            {{ $t('home.where-i-have-worked') }}
          </h2>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="relative | my-work-experience__button-wrapper">
            <div class="flex md:flex-col | mb-8 md:mb-0 pb-4 md:pb-0 | overflow-x-scroll md:overflow-x-auto | my-work-experience__button-list">
              <MyWorkExperienceButton
                :is-active="currentTab === 'telus'"
                @onClick="changeTab('telus')"
              >
                Telus International
              </MyWorkExperienceButton>
              <MyWorkExperienceButton
                :is-active="currentTab === 'master'"
                @onClick="changeTab('master')"
              >
                Master Development
              </MyWorkExperienceButton>
              <MyWorkExperienceButton
                :is-active="currentTab === 'viaro'"
                @onClick="changeTab('viaro')"
              >
                Viaro Networks
              </MyWorkExperienceButton>
            </div>
          </div>
          <div class="flex-1 | md:ml-6">
            <MyWorkExperienceCard v-bind="workExperienceData[currentTab]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperience extends Vue {
  currentTab: string = 'telus';

  get workExperienceData (): any {
    return {
      telus: {
        jobPosition: 'Software Developer',
        company: 'Telus International',
        websiteUrl: 'https://www.telusinternational.com',
        startYear: [2020, 11],
        descriptionParagraphs: this.$i18n.t('my-work-experience.masterdevel.description'),
        techStack: ['Angular', 'Typescript', 'Javascript', 'jQuery', 'i18n', 'Java Portlets', 'LESS'],
      },
      master: {
        jobPosition: 'Frontend Developer',
        company: 'Master Development',
        websiteUrl: 'https://www.linkedin.com/company/corporaci%C3%B3n-master-group',
        startYear: [2019, 9],
        endYear: [2020, 7],
        descriptionParagraphs: this.$i18n.t('my-work-experience.masterdevel.description'),
        techStack: ['NuxtJS', 'Vue', 'Vuex', 'Angular', 'Typescript', 'i18n', 'Bulma', 'SCSS', 'Pug', 'Handlebars', 'Prismic CMS', 'NodeJS'],
      },
      viaro: {
        jobPosition: 'Quality Assurance',
        company: 'Viaro Networks',
        websiteUrl: 'https://www.viaro.net',
        startYear: [2018, 5],
        descriptionParagraphs: this.$i18n.t('my-work-experience.viaro.description'),
        endYear: [2019, 9],
        tools: ['BrowserStack', 'Jira', 'Lighthouse by Google'],
      },
    };
  }

  changeTab (nextTab: string): void {
    this.currentTab = nextTab;
  }
}
</script>

<style lang="scss" scoped>
.my-work-experience {
  &__title {
    @include theme-gradients(four, five);
  }

  &__button-list {
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 80px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%);
      content: '';
      pointer-events: none;
    }
  }
}

@screen md {
  .my-work-experience {
    &__button-wrapper {
      width: 210px;
    }

    &__button-list {
      &::after {
        display: none;
      }
    }
  }
}
</style>
