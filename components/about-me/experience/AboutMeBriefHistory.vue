<template>
  <section class="min-h-screen | flex | p-20">
    <div class="flex flex-col | w-full">
      <h2 class="section-title about-me-brief-history__title">
        {{ $t('me.work-experience') }}
      </h2>
      <div class="flex justify-center items-center | flex-1">
        <div class="grid grid-cols-4">
          <AboutMeJobCard
            class="col-start-1 row-start-1"
            company="TELUS International"
            job-role="Software Developer"
            start-year="Dec 2020"
          />
          <AboutMeJobCard
            class="col-start-2 row-start-2"
            company="Freelance"
            job-role="Frontend Developer"
            start-year="Mar 2020"
          />
          <AboutMeJobCard
            class="col-start-3 row-start-3"
            company="Master Development"
            job-role="Frontend Developer"
            start-year="Oct 2019"
            end-year="Aug 2020"
          />
          <AboutMeJobCard
            class="col-start-4 row-start-4"
            company="Viaro Networks"
            job-role="Quality Assurance"
            start-year="Jun 2018"
            end-year="Oct 2019"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AboutMeBriefHistory extends Vue {}
</script>

<style lang="scss" scoped>
.about-me-brief-history {
  &__title {
    @extend .gradient-four;
  }
}

html.dark-mode {
  .about-me-brief-history {
    &__title {
      @extend .gradient-five;
    }
  }
}
</style>
