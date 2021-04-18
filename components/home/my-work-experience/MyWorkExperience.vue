<template>
  <section class="section-container">
    <div class="container | flex justify-center | my-0 mx-auto">
      <div class="flex flex-col | w-full | max-w-screen-lg">
        <h2 class="mb-8 mx-auto | text-center | section-title my-work-experience__title">
          {{ $t('home.where-i-have-worked') }}
        </h2>
        <div class="flex">
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
          <div class="flex-1 | ml-6">
            <MyWorkExperienceCard
              v-if="currentTab === 'telus'"
              job-position="Software Developer"
              company="Telus International"
              website-url="https://www.telusinternational.com"
              :start-year="[2020, 11]"
            >
              Yo trabaje en Telus
            </MyWorkExperienceCard>
            <MyWorkExperienceCard
              v-if="currentTab === 'master'"
              job-position="Frontend Developer"
              company="Master development"
              website-url="https://www.linkedin.com/company/corporaci%C3%B3n-master-group"
              :start-year="[2019, 9]"
              :end-year="[2020, 7]"
            >
              Yo trabaje en Master
            </MyWorkExperienceCard>
            <MyWorkExperienceCard
              v-if="currentTab === 'viaro'"
              job-position="Quality Assurance"
              company="Viaro Networks"
              website-url="https://www.viaro.net"
              :start-year="[2018, 5]"
              :end-year="[2019, 9]"
            >
              Yo trabaje en Viaro
            </MyWorkExperienceCard>
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
}
</style>
