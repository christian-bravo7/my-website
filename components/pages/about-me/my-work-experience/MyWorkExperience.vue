<template>
  <section class="section-container">
    <div class="max-w-screen-lg | flex justify-center items-center | w-full | my-0 mx-auto | overflow-x-hidden">
      <div class="flex flex-col | w-full">
        <div class="flex justify-center | mb-16">
          <h2 class="section-title my-work-experience__title">
            {{ $t('home.where-i-have-worked') }}
          </h2>
        </div>
        <div class="relative flex flex-col md:flex-row">
          <div class="my-work-experience__button-wrapper">
            <div class="relative | flex md:flex-col | mb-8 md:mb-0 pb-4 md:pb-0 | overflow-x-scroll md:overflow-x-auto | my-work-experience__button-list">
              <MyWorkExperienceButton
                v-for="(work, key) in workExperienceData"
                :id="key"
                :key="key"
                class="mr-1 md:ml-1 md:mr-0 | my-work-experience__button"
                :is-active="currentTab === key"
                @click="changeTab(key)"
              >
                {{ work.company }}
              </MyWorkExperienceButton>
              <div class="absolute | left-0 bottom-3 md:bottom-0 h-1 md:h-full w-full md:w-1 | rounded-full | bg-gray-100 dark:bg-blue-700">
                <span
                  class="block | absolute | md:w-full h-full md:h-14 | rounded-full | bg-pink-500 dark:bg-blue-400 | my-work-experience__button-marker"
                  :style="{ 'top': `${markTopPosition}px`, 'left': `${markLeftPosition}px`, 'width': `${markWidth}px` }"
                />
              </div>
            </div>
            <span class="my-work-experience__button-list-fade" />
          </div>
          <div class="flex-1 | md:ml-6 | my-work-experience__card-wrapper">
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
  markTopPosition: number = 0;
  markLeftPosition: number = 0;
  markWidth: number = 0;

  get workExperienceData (): any {
    return {
      telus: {
        jobPosition: 'Software Developer',
        company: 'TELUS International',
        websiteUrl: 'https://www.telusinternational.com',
        startYear: [2020, 11],
        descriptionParagraphs: this.$i18n.t('my-work-experience.telus.description'),
        techStack: ['Angular', 'Typescript', 'Javascript', 'jQuery', 'i18n', 'Java (Liferay)', 'SCSS', 'LESS'],
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
    const element = document.getElementById(nextTab) as HTMLElement;

    this.currentTab = nextTab;
    this.markTopPosition = element.offsetTop;
    this.markLeftPosition = element.offsetLeft;
    this.markWidth = element.offsetWidth;
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
      display: block;
      height: 20px;
      margin-left: 40px;
      padding: 4px;
      content: '';
    }
  }

  &__button {
    min-width: 210px;
  }

  &__button-marker {
    top: initial;
    transition-delay: 100ms;
    transition-duration: 300ms;
    transition-property: width, left;
  }

  &__button-list-fade {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 100px;
    pointer-events: none;
    content: '';

    @apply bg-gradient-to-r from-transparent to-gray-50 dark:to-blue-800;
  }
}

@screen md {
  .my-work-experience {
    &__button-wrapper {
      width: 210px;
    }

    &__button {
      min-width: auto;
    }

    &__button-list-fade {
      display: none;
    }

    &__button-marker {
      left: 0 !important;
      width: 100% !important;
      transition-property: top;
    }

    &__button-list {
      &::after {
        display: none;
      }
    }

    &__card-wrapper {
      min-height: 430px;
    }
  }
}
</style>
