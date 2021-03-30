<template>
  <section class="section-container">
    <div class="container | flex | my-0 mx-auto">
      <div class="flex flex-col | w-full">
        <h2 class="section-title | mb-8 | about-me-experience__title">
          {{ $t('me.work-experience') }}
        </h2>
        <div class="flex justify-center items-center | flex-1">
          <div class="w-full | grid grid-cols-1 gap-8 md:gap-2 md:grid-cols-9">
            <AboutMeExperienceCard
              v-bind="myWorkExperiences[0]"
              class="md:col-span-3 md:row-start-1 md:col-start-1"
            />
            <AboutMeExperienceCard
              v-bind="myWorkExperiences[1]"
              class="md:col-span-3 md:row-start-2 md:col-start-3"
            />
            <AboutMeExperienceCard
              v-bind="myWorkExperiences[2]"
              class="md:col-span-3 md:row-start-3 md:col-start-5"
            />
            <AboutMeExperienceCard
              v-bind="myWorkExperiences[3]"
              class="md:col-span-3 md:row-start-4 md:col-start-7"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { Vue, Component } from 'nuxt-property-decorator';

import { WorkExperience } from '@/components/about-me/experience/types';

@Component
export default class AboutMeExperience extends Vue {
  myWorkExperiences: Array<WorkExperience> = [
    {
      company: 'TELUS International',
      jobRole: 'Software Developer',
      startYear: [2020, 11],
    },
    {
      company: 'Freelance',
      jobRole: 'Frontend Developer',
      startYear: [2020, 2],
    },
    {
      company: 'Master Development',
      jobRole: 'Frontend Developer',
      startYear: [2019, 9],
      endYear: [2020, 7],
    },
    {
      company: 'Viaro Networks',
      jobRole: 'Quality Assurance',
      startYear: [2018, 5],
      endYear: [2019, 9],
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
