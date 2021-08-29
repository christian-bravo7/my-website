<template>
  <section class="section-container">
    <div class="container | flex | my-0 mx-auto">
      <div class="flex flex-col | w-full">
        <h2 class="mb-8 | text-center | section-title recent-projects__title">
          {{ $t('home.recent-projects') }}
        </h2>
        <div class="flex justify-center items-center | flex-1">
          <div class="flex flex-wrap justify-center | max-w-screen-lg">
            <RecentProjectAdvice />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class RecentProjects extends Vue {}
</script>

<style lang="scss" scoped>
.recent-projects {
  &__title {
    @include theme-gradients(four, five);
  }
}
</style>
