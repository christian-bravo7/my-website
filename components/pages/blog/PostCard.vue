<template>
  <div
    class="relative | bg-white dark:bg-dark-theme-900 bg-opacity-75 dark:bg-opacity-75 | hover:bg-opacity-100 dark-hover:bg-opacity-100 hover:shadow-xl | group | rounded-xl shadow-md | transition-all duration-300"
  >
    <div class="absolute inset-0 flex flex-col">
      <figure class="relative flex-1 overflow-hidden rounded-xl">
        <NuxtLink
          class="absolute inset-0 | bg-cover bg-center | group-hover:transform group-hover:scale-110 | transition-transform duration-300"
          :style="{ backgroundImage: `url(${image})` }"
          :to="path"
        />
      </figure>
      <div class="flex flex-col items-start p-4">
        <div class="flex justify-between items-center | w-full | mb-4">
          <div
            v-if="tags.length"
          >
            <AppPill
              v-for="(tag, index) in tags"
              :key="index"
              :text="tag"
            />
          </div>
          <div class="text-xs | text-gray-500">
            {{ formattedDate }}
          </div>
        </div>
        <NuxtLink
          class="inline-block text-2xl font-bold hover:underline text-gray-900 dark:text-gray-200 select-none"
          :class="{ 'text-3xl': first }"
          :to="path"
        >
          {{ title }}
        </NuxtLink>
        <p
          class="line-clamp text-sm mt-2 text-gray-900 dark:text-gray-200"
          :class="{ 'text-base': first }"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class PostCard extends Vue {
  @Prop({ type: String, required: true })
  readonly image!: string;

  @Prop({ type: String, required: true })
  readonly path!: string;

  @Prop({ type: String, required: true })
  readonly title!: string;

  @Prop({ type: String, required: true })
  readonly description!: string;

  @Prop({ type: Array, required: true })
  readonly date!: Array<number>;

  @Prop({ type: Boolean, default: false })
  readonly first!: boolean;

  @Prop({ type: Array, default: () => [] })
  readonly tags!: Array<string>;

  get formattedDate (): string {
    return dayjs(this.date as any).format('MMM DD, YYYY');
  }
}
</script>

<style lang="scss" scoped>
.line-clamp {
  display: flex;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

</style>
