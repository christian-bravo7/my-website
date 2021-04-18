<template>
  <div class="">
    <h6 class="text-xl">
      <span class="font-bold">
        {{ jobPosition }}
      </span>
      <span>{{ $t('home.at-label') }}</span>
      <a
        class="text-pink-500 dark:text-blue-500 | font-bold"
        :href="websiteUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ company }}
      </a>
    </h6>
    <div>
      <span>{{ formattedStartYear }}</span>
      <span>-</span>
      <span>
        <template v-if="endYear">
          {{ formattedEndYear }}
        </template>
        <template v-else>
          {{ $t('home.present-label') }}
        </template>
      </span>
      <span>| {{ formatDuration() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceCard extends Vue {
  @Prop({ type: String, required: true })
  readonly jobPosition!: string;

  @Prop({ type: String, required: true })
  readonly company!: string;

  @Prop({ type: String, required: true })
  readonly websiteUrl!: string;

  @Prop({ type: Array, required: true })
  readonly startYear!: Array<number>;

  @Prop({ type: Array })
  readonly endYear!: Array<number>;

  get formattedStartYear (): string {
    return this.formattedYear(this.startYear);
  }

  get formattedEndYear (): string {
    return this.formattedYear(this.endYear);
  }

  get separatorSymbol (): string {
    return this.endYear ? '/' : '~';
  }

  get durationTime (): any {
    return dayjs(this.endYear as any).diff(this.startYear as any, 'year');
  }

  formattedYear (date: any): string {
    return dayjs(date).format('MMMM YYYY');
  }

  formatDuration (): string {
    const totalYears = dayjs(this.endYear as any).diff(this.startYear as any, 'year');
    const totalMonths = dayjs(this.endYear as any).diff(this.startYear as any, 'month');

    const restMonths = totalMonths - (totalYears * 12);

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
