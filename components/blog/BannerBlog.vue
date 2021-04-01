<template>
  <section
    class="flex relative bg-black"
  >
    <img
      class="absolute inset-0 w-full h-full object-cover object-center opacity-50"
      :src="image"
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
            {{ minutes }}
          </span>
          min read
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import dayjs from 'dayjs';

@Component
export default class BannerBlog extends Vue {
  @Prop({ type: String, required: true })
  readonly image!: string;

  @Prop({ type: Array, required: true })
  readonly date!: Array<number>;

  @Prop({ type: String, required: true })
  readonly title!: string;

  @Prop({ type: String, required: true })
  readonly description!: string;

  @Prop({ type: Number, required: true })
  readonly minutes!: number;

  get formattedDate (): string {
    return dayjs(this.date as any).format('MMM DD, YYYY');
  }
}
</script>
