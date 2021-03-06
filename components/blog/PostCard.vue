<template>
  <div
    class="relative bg-white dark:bg-blue-900 bg-opacity-75 dark:bg-opacity-75 hover:bg hover:bg-opacity-100 dark-hover:bg-opacity-100 rounded-lg shadow-md transition-colors duration-200"
  >
    <div class="absolute inset-0 p-2 flex flex-col">
      <figure class="relative flex-1 overflow-hidden rounded-lg">
        <NuxtLink
          class="absolute inset-0 bg-cover bg-center post-image transition-transform duration-200"
          :style="{ backgroundImage: `url(${image})` }"
          :to="path"
        />
      </figure>
      <div class="flex flex-col items-start py-2">
        <div class="w-full">
          <div
            v-if="tags.length"
            class="float-right ml-4"
          >
            <span
              v-for="(tag, index) in tags"
              :key="index"
              class="py-1 px-2 text-xs font-bold ml-2 select-none capitalize rounded-full bg-pink-500 text-gray-50"
            >
              {{ tag }}
            </span>
          </div>
          <NuxtLink
            class="inline text-xl font-bold hover:underline text-gray-900 dark:text-gray-200 select-none"
            :class="{ 'text-2xl': first }"
            :to="path"
          >
            {{ title }}
          </NuxtLink>
        </div>
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

  @Prop({ type: Boolean, default: false })
  readonly first!: boolean;

  @Prop({ type: Array, default: () => [] })
  readonly tags!: Array<string>;
}
</script>

<style lang="scss" scoped>
.line-clamp {
  display: flex;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.post-image {
  &:hover {
    transform: scale(1.2);
  }
}

@include dark-mode {
  .post-image {
    filter: brightness(0.9);
  }
}
</style>
