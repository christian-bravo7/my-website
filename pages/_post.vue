<template>
  <section>
    <Portal to="blog-banner">
      <PostBanner v-bind="bannerInfo" />
    </Portal>
    <div class="relative | container mx-auto">
      <div class="w-full | py-12 sm:py-20 px-4 sm:px-12 | shadow-lg | rounded-2xl | bg-gray-50 dark:bg-blue-900 | transform -translate-y-20">
        <div class="max-w-7xl w-full | mx-auto">
          <NuxtContent
            class="blog-content"
            :document="article"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import { PostContent } from '@/content/types';
import { Context } from '@nuxt/types';
import { MetaInfo } from 'vue-meta/types';

import { getMetaTags } from '@/seo';

@Component({
  layout: 'post',
})
export default class Post extends Vue {
  private article!: PostContent;

  head (): MetaInfo {
    const postMetaTags = getMetaTags({
      siteTitle: this.bannerInfo.title,
      siteImage: this.bannerInfo.image,
    });

    return {
      ...postMetaTags,
    };
  }

  async asyncData ({ $content, error, params }: Context): Promise<{ article: PostContent }> {
    const article = await $content(params.post)
      .fetch()
      .catch(() => {
        error({ statusCode: 404 });
      });

    return {
      article: article as PostContent,
    };
  }

  get postUrl (): string {
    const base = process.env.hostname;
    const path = this.$route.path;

    return `${base}${path}`;
  }

  get bannerInfo (): Partial<PostContent> {
    const { title, description, date, image, minutes } = this.article;

    return {
      url: this.postUrl,
      title,
      description,
      date,
      image,
      minutes,
    };
  }
}
</script>

<style lang="scss">
.blog-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    @apply dark:text-gray-50;
  }

  h1 {
    @apply text-2xl md:text-4xl mb-4 sm:mb-8 font-bold;
  }

  h2 {
    @apply text-xl md:text-3xl mb-3 sm:mb-6 font-bold;
  }

  h3 {
    @apply text-lg md:text-xl mb-3 font-bold;
  }

  p {
    @apply text-base md:text-lg mb-3 sm:mb-6 leading-loose;
  }

  ul {
    @apply ml-6 mb-4;
  }

  li {
    @apply list-disc list-inside mb-2;
  }

  a {
    @apply text-pink-500 dark:text-blue-400 underline;
  }
}

</style>
