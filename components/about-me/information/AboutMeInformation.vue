<template>
  <section class="section-container">
    <div class="container | flex | my-0 mx-auto">
      <div class="text-black dark:text-white | about-me-information__content">
        <div class="relative | mb-4 md:mb-0">
          <h2 class="mb-4 | section-title about-me-information__title">
            {{ $t('me.hi-label') }}
          </h2>
          <p
            class="relative z-10 | font-base | about-me-information__description"
            v-html="$md($t('me.about-me-description', { age: currentAge }))"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="~assets/img/photo-2.png"
            alt="christian"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
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
  &__content {
    @apply grid grid-cols-1 items-center;
  }

  &__title {
    @include theme-gradients(four, five);
  }

  &__description {
    /deep/ p {
      @apply mb-4;
    }
  }
}

@screen lg {
  .about-me-information {
    &__content {
      @apply gap-40;

      grid-template-columns: 1fr auto;
    }
  }
}
</style>
