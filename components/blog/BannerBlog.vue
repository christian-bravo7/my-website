<template>
  <div
    class="flex relative bg-black"
  >
    <img
      class="absolute inset-0 w-full h-full object-cover object-center opacity-50"
      :src="imageSource"
      alt="ballon"
    >
    <div class="flex flex-col justify-between container mx-auto relative z-10 p-4">
      <div />
      <div
        class="flex flex-col justify-center items-center"
      >
        <span class="text-xs text-center text-gray-300">
          {{ formattedDate }}
        </span>
        <h1 class="text-3xl text-center md:text-5xl text-gray-50 font-bold">
          {{ title }}
        </h1>
        <h6 class="text-base  text-center text-gray-50">
          {{ description }}
        </h6>
      </div>
      <div class="flex justify-end">
        <span class="text-gray-50 text-xs">
          <span class="text-xl">
            {{ minutesToRead }}
          </span>
          min read
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class BannerBlog extends Vue {
  @Prop({ type: String, required: true })
  readonly imageSource!: string;

  @Prop({ type: String, required: true })
  readonly createdAt!: string;

  @Prop({ type: String, required: true })
  readonly title!: string;

  @Prop({ type: String, required: true })
  readonly description!: string;

  @Prop({ type: Number, required: true })
  readonly minutesToRead!: number;

  get formattedDate (): string {
    const months: any = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
    const ms = Date.parse(this.createdAt);
    const date = new Date(ms);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const fullDate = `${months[month]} ${day}, ${year}`;

    return fullDate;
  }
}

</script>
