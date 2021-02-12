<template>
  <section class="section-container">
    <div class="container | flex | my-0 mx-auto">
      <div class="flex flex-col | w-full">
        <h2 class="section-title about-me-experience__title">
          {{ $t('me.work-experience') }}
        </h2>
        <div class="flex justify-center items-center | flex-1">
          <div class="w-full | grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-9">
            <AboutMeJobCard
              class="md:col-start-1 md:row-start-1 md:col-span-3"
              company="TELUS International"
              job-role="Software Developer"
              start-year="Dec 2020"
            />
            <AboutMeJobCard
              class="md:col-start-3 md:row-start-2 md:col-span-3"
              company="Freelance"
              job-role="Frontend Developer"
              start-year="Mar 2020"
            />
            <AboutMeJobCard
              class="md:col-start-5 md:row-start-3 md:col-span-3"
              company="Master Development"
              job-role="Frontend Developer"
              start-year="Oct 2019"
              end-year="Aug 2020"
            />
            <AboutMeJobCard
              class="md:col-start-7 md:row-start-4 md:col-span-3"
              company="Viaro Networks"
              job-role="Quality Assurance"
              start-year="Jun 2018"
              end-year="Oct 2019"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AboutMeExperience extends Vue {}
</script>

<style lang="scss" scoped>
.about-me-experience {
  &__title {
    @extend .gradient-four;
  }
}

html.dark-mode {
  .about-me-experience {
    &__title {
      @extend .gradient-five;
    }
  }
}
</style>
