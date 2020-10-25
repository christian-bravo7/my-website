<template>
  <section>
    <Portal to="blog-banner">
      <BannerBlog
        :image-source="imageSource"
        :title="title"
        :created-at="createdAt"
        :description="description"
        :minutes-to-read="minutesToRead"
      />
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

import { Portal } from 'portal-vue';

@Component({
  head () {
    return {
      title: this.title,
    };
  },
  components: {
    Portal,
  },
  async asyncData ({ $content, error, params }): Promise<any> {
    const articles = await $content(params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      articles,
    };
  },
  layout: 'post',
})
export default class Blog extends Vue {
  get title (): string {
    // @ts-ignore
    return this.articles.title;
  }

  get description (): string {
    // @ts-ignore
    return this.articles.description;
  }

  get createdAt (): string {
    // @ts-ignore
    return this.articles.createdAt;
  }

  get imageSource (): string {
    // @ts-ignore
    return this.articles.image;
  }

  get minutesToRead (): string {
    // @ts-ignore
    return this.articles.minutes;
  }
}
</script>

<style lang="scss">
/* stylelint-disable */

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

html.dark-mode {
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
