<template>
  <div
    class="relative bg-white dark:bg-blue-700 bg-opacity-75 dark:bg-opacity-75 hover:bg hover:bg-opacity-100 dark-hover:bg-opacity-100 rounded-lg shadow-md transition-colors duration-200"
  >
    <template v-if="!placeholder">
      <div class="absolute inset-0 p-2 flex flex-col">
        <figure class="relative flex-1 overflow-hidden rounded-lg">
          <NuxtLink
            class="absolute inset-0 bg-cover bg-center post-image transition-transform duration-200"
            :style="{ backgroundImage: `url(${backgroundImage})` }"
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
                class="py-1 px-2 text-xs font-bold ml-2 select-none capitalize rounded-full bg-pink-800 text-gray-50"
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
    </template>
    <template v-else>
      <div class="absolute inset-0 p-2 flex flex-col items-center justify-center select-none">
        <p class="text-gray-600 dark:text-gray-400 text-center">
          Writing cool things...
        </p>
        <p class="text-gray-600 dark:text-gray-400 text-center">
          Come back soon :)
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class PostCard extends Vue {
  @Prop({ type: String })
  readonly backgroundImage!: string;

  @Prop({ type: String })
  readonly path!: string;

  @Prop({ type: String })
  readonly title!: string;

  @Prop({ type: String })
  readonly description!: string;

  @Prop({ type: Boolean })
  readonly first!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly placeholder!: boolean;

  @Prop({ type: Array, default: () => [] })
  readonly tags!: Array<string>;
}
</script>

<style lang="scss" scoped>
.line-clamp {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.post-image {
  &:hover {
    transform: scale(1.2);
  }
}

html.dark-mode {
  .post-image {
    filter: brightness(0.9);
  }
}

</style>
