<template>
  <section class="min-h-screen | flex items-center | p-20">
    <div class="grid grid-cols-1 md:grid-cols-2 | text-black dark:text-white">
      <div class="relative">
        <h2 class="section-title about-me-information__title">
          {{ $t('me.i-label') }}
        </h2>
        <p class="relative z-10 | text-base md:text-lg | leading-loose">
          {{ $t('me.about-me-description', { age: currentAge }) }}
        </p>
      </div>
      <div class="flex items-center justify-center | primary-text">
        <RemolinoLogo class="w-11/12 fill-current" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import RemolinoLogo from '~/assets/img/remolino.svg?inline';

@Component({
  components: {
    RemolinoLogo,
  },
})
export default class AboutMeInformation extends Vue {
  readonly birthday: string = '2000-01-15';

  get currentAge (): number {
    const currentDate = new Date();
    const birth = new Date(Date.parse(this.birthday));

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const birthMonth = birth.getMonth();
    const birthYear = birth.getFullYear();
    const birthDay = birth.getDate();

    const age = currentYear - birthYear;
    const ageNotCompleted = age - 1;

    if (birthMonth > currentMonth) {
      return ageNotCompleted;
    }

    if (birthMonth < currentMonth) {
      return age;
    }

    if (birthDay > currentDay) {
      return ageNotCompleted;
    }

    return age;
  }
}
</script>

<style lang="scss" scoped>
.about-me-information {
  &__title {
    @extend .gradient-four;
  }
}

html.dark-mode {
  .about-me-information {
    &__title {
      @extend .gradient-five;
    }
  }
}
</style>
