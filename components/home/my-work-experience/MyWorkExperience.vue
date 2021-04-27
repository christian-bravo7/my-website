<template>
  <section class="section-container">
    <div class="max-w-screen-lg | flex justify-center | my-0 mx-auto">
      <div class="flex flex-col | w-full">
        <h2 class="my-32 mx-auto | text-center | section-title my-work-experience__title">
          {{ $t('home.where-i-have-worked') }}
        </h2>
        <div class="flex">
          <div class="my-work-experience__button-list">
            <div class="flex flex-col">
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
          <div class="flex-1 | ml-6">
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
    width: 210px;
  }
}
</style>
