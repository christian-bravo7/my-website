<template>
  <section
    class="flex | relative | bg-black"
  >
    <img
      class="absolute inset-0 | w-full h-full | object-cover object-center | opacity-50"
      :src="image"
      alt="ballon"
    >
    <div class="flex flex-col | z-10 | container max-w-7xl w-full | mx-auto px-4 py-52">
      <h1 class="text-3xl md:text-5xl | font-bold | text-gray-50 | mb-6">
        {{ title }}
      </h1>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-gray-200 | mb-4">{{ formattedDate }}</span>
          <div>
            <AppPill text="Welcome" />
          </div>
        </div>
        <PostShareWithSocialNetworks :post-information="{ title, description, url }" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import dayjs from 'dayjs';

@Component
export default class BlogBanner extends Vue {
  @Prop({ type: String, required: true })
  readonly image!: string;

  @Prop({ type: Array, required: true })
  readonly date!: Array<number>;

  @Prop({ type: String, required: true })
  readonly title!: string;

  @Prop({ type: String, required: true })
  readonly description!: string;

  @Prop({ type: String, required: true })
  readonly url!: string;

  @Prop({ type: Number, required: true })
  readonly minutes!: number;

  get formattedDate (): string {
    return dayjs(this.date as any).format('MMM DD, YYYY');
  }
}
</script>
