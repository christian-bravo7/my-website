<template>
  <section>
    <Portal to="blog-banner">
      <BannerBlog v-bind="bannerInfo" />
    </Portal>
    <div>
      <div class="container mx-auto py-20 px-4">
        <NuxtContent
          class="blog-content"
          :document="article"
        />
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
export default class Blog extends Vue {
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

  get bannerInfo (): Partial<PostContent> {
    const { title, description, date, image, minutes } = this.article;

    return {
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
    @apply text-3xl md:text-5xl mb-6 font-bold;
  }

  h2 {
    @apply text-xl md:text-3xl mb-4 font-bold;
  }

  h3 {
    @apply text-lg md:text-xl mb-3 font-bold;
  }

  p {
    @apply text-base md:text-lg mb-4 leading-loose;
  }

  ul {
    @apply ml-6 mb-4;
  }

  li {
    @apply list-disc list-inside mb-2;
  }

  a {
    @apply text-indigo-600 underline;
  }
}

</style>
