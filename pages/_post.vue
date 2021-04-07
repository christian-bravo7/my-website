<template>
  <section>
    <Portal to="blog-banner">
      <BannerBlog v-bind="bannerInfo" />
    </Portal>
    <div>
      <div class="container mx-auto py-20 px-4">
        <NuxtContent
          class="blog-content"
          :document="articles"
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

@Component({
  layout: 'post',
})
export default class Blog extends Vue {
  private articles!: PostContent;

  head (): MetaInfo {
    return {
      title: this.bannerInfo.title,
    };
  }

  async asyncData ({ $content, error, params }: Context): Promise<{ articles: PostContent }> {
    const articles = await $content(params.post)
      .fetch()
      .catch(() => {
        error({ statusCode: 404 });
      });

    return {
      articles: articles as PostContent,
    };
  }

  get bannerInfo (): Partial<PostContent> {
    const { title, description, createdAt, image, minutes } = this.articles;

    return {
      title,
      description,
      createdAt,
      image,
      minutes,
    };
  }
}
</script>

<style lang="scss">
.blog-content {
  h1 {
    @apply text-3xl mb-6 font-bold;

    @screen md {
      @apply text-5xl;
    }
  }

  h2 {
    @apply text-xl mb-4 font-bold;

    @screen md {
      @apply text-3xl;
    }
  }

  h3 {
    @apply text-lg mb-3 font-bold;

    @screen md {
      @apply text-xl;
    }
  }

  p {
    @apply text-base mb-4 leading-loose;

    @screen md {
      @apply text-lg;
    }
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

@include dark-mode {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    @apply text-gray-50;
  }
}
</style>
