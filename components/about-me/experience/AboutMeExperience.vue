<template>
  <section class="section-container">
    <div class="container | flex | my-0 mx-auto">
      <div class="flex flex-col | w-full">
        <h2 class="section-title | mb-8 | about-me-experience__title">
          {{ $t('me.work-experience') }}
        </h2>
        <div class="flex justify-center items-center | flex-1">
          <div class="w-full | grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-9">
            <AboutMeExperienceCard
              v-for="(workExperience, index) in myWorkExperiences"
              :key="index"
              v-bind="workExperience"
              class="md:col-span-3"
              :class="[
                `md:row-start-${index + 1}`,
                `md:col-start-${index + index + 1}`
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import { WorkExperience } from '@/components/about-me/experience/types';

@Component
export default class AboutMeExperience extends Vue {
  myWorkExperiences: Array<WorkExperience> = [
    {
      company: 'TELUS International',
      jobRole: 'Software Developer',
      startYear: 'Dec 2020',
    },
    {
      company: 'Freelance',
      jobRole: 'Frontend Developer',
      startYear: 'Mar 2020',
    },
    {
      company: 'Master Development',
      jobRole: 'Frontend Developer',
      startYear: 'Oct 2019',
      endYear: 'Aug 2020',
    },
    {
      company: 'Viaro Networks',
      jobRole: 'Quality Assurance',
      startYear: 'Jun 2018',
      endYear: 'Oct 2019',
    },
  ]
}
</script>

<style lang="scss" scoped>
.about-me-experience {
  &__title {
    @include theme-gradients(four, five);
  }
}
</style>
