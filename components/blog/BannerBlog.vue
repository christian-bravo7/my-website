<template>
  <div
    class="flex relative bg-black"
  >
    <img
      class="absolute inset-0 w-full h-full object-cover object-center opacity-25"
      :src="imageSource"
      alt="ballon"
    >
    <div class="flex flex-col justify-between container mx-auto relative z-10 p-4">
      <div />
      <div
        class="flex flex-col justify-center items-center"
      >
        <span class="text-xs text-gray-300">
          {{ createdAt }}
        </span>
        <h1 class="text-3xl md:text-5xl text-gray-50 font-bold">
          {{ title }}
        </h1>
        <h6 class="text-base text-gray-50">
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
}

</script>
