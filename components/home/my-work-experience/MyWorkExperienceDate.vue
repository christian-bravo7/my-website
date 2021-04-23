<template>
  <div class="flex text-sm mb-6">
    <span>
      <span class="capitalize">
        {{ formattedStartYear }}
      </span>
      <span>-</span>
      <span class="capitalize">
        {{ formattedEndYear }}
      </span>
    </span>
    <span class="flex items-center | mx-2">
      <span class="w-1 h-1 | rounded-full | bg-black dark:bg-white" />
    </span>
    <span class="text-gray-700 dark:text-gray-300">
      {{ formattedDuration }}
    </span>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceToolsList extends Vue {
  @Prop({ type: Array, required: true })
  readonly startYear!: Array<number>;

  @Prop({ type: Array })
  readonly endYear!: Array<number>;

  get formattedStartYear (): string {
    return this.formattedYear(this.startYear);
  }

  get formattedEndYear (): string {
    if (this.endYear) {
      return this.formattedYear(this.endYear);
    }

    return this.$t('home.present-label') as string;
  }

  get formattedDuration (): string {
    return this.formatDuration();
  }

  formattedYear (date: any): string {
    return dayjs(date).format('MMM YYYY');
  }

  formatDuration (): string {
    const totalYears = dayjs(this.endYear as any).diff(this.startYear as any, 'year');
    const totalMonths = dayjs(this.endYear as any).diff(this.startYear as any, 'month');

    const restMonths = totalMonths - (totalYears * 12) + 1;

    const yearTranslation = totalYears === 1
      ? this.$t('time.year-label')
      : totalYears > 1
        ? this.$t('time.years-label')
        : '';

    const monthsTranslation = restMonths === 1
      ? this.$t('time.month-label')
      : restMonths > 1
        ? this.$t('time.months-label')
        : '';

    const andTranslation = this.$t('time.and-label');

    const formattedYear = totalYears ? `${totalYears} ${yearTranslation}` : '';
    const formattedMonth = restMonths ? `${restMonths} ${monthsTranslation}` : '';

    if (formattedYear && formattedMonth) {
      return `${formattedYear} ${andTranslation} ${formattedMonth}`;
    }

    if (formattedYear) {
      return `${formattedYear}`;
    }

    if (formattedMonth) {
      return `${formattedMonth}`;
    }

    return 'problem';
  }
}
</script>
