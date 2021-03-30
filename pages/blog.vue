<template>
  <section>
    <div class="pt-0 md:pt-20">
      <div class="container mx-auto px-4 md:px-0 py-8 md:py-20 relative z-10">
        <div class="blog-grid">
          <PostCard
            v-for="(article, index) in articles"
            :key="index"
            v-bind="article"
            :first="index === 0"
            :class="dynamicColors(index)"
          />
          <PostCardEmpty />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import { Vue, Component } from 'nuxt-property-decorator';

import { getMetaTags } from '@/seo';
import { IContentDocument } from '@nuxt/content/types/content';

// @ts-ignore
@Component({
  middleware: ['wipMiddleware'],
  layout: 'blog',
  nuxtI18n: {
    locales: ['en'],
  },
  head () {
    const homeMetaTags = getMetaTags({
      siteTitle: 'blog',
    });

    return {
      ...homeMetaTags,
    };
  },
})
export default class Blog extends Vue {
  async asyncData ({ $content, error }: Context): Promise<{ articles: IContentDocument[]}> {
    const articles = await $content()
      .fetch()
      .catch(() => {
        error({ statusCode: 404 });
      });

    return {
      articles: articles as IContentDocument[],
    };
  }

  get dynamicColors (): (index: number) => string {
    const colors = [
      'hover:bg-teal-100 dark-hover:bg-teal-900',
      'hover:bg-pink-100 dark-hover:bg-pink-900',
      'hover:bg-yellow-100 dark-hover:bg-yellow-900',
      'hover:bg-purple-50 dark-hover:bg-purple-900',
      'hover:bg-indigo-100 dark-hover:bg-indigo- 900',
    ];

    return (index: number): string => {
      return colors[index];
    };
  }
}
</script>

<style lang="scss" scoped>
.blog-grid {
  grid-template-columns: repeat(2, 1fr);

  @apply grid gap-4;

  & > * {
    &::after {
      display: block;
      padding-bottom: (9 / 9) * 100%;
      content: "";
    }
  }

  & > *:first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }

  @screen md {
    grid-template-columns: repeat(3, 1fr);
  }

  @screen lg {
    grid-template-columns: repeat(4, 1fr);
  }
}

.flash-text-enter {
  .primary-text {
    opacity: 0;
  }
}

.flash-text-enter-active {
  transition: 5s;
}

.flash-text-enter-to {
  .primary-text {
    opacity: 1;
  }
}

.text-min-content {
  width: 100%;
  line-height: normal;

  @screen md {
    width: min-content;
  }
}

</style>
