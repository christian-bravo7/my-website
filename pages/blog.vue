<template>
  <section>
    <div class="container mx-auto py-20">
      <div class="blog-grid">
        <PostCard
          v-for="(article, index) in articles"
          :key="index"
          :first="index === 0"
          :title="article.title"
          :description="article.description"
          :path="article.path"
          :background-image="article.image"
          :tags="article.tags"
          :class="dynamicColors(index)"
        />
        <PostCard
          :placeholder="true"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head () {
    return {
      title: 'blog',
    };
  },
  layout: 'blog',
  async asyncData ({ $content, error }): Promise<any> {
    const articles = await $content()
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    console.log(articles);

    return {
      articles,
    };
  },
})
export default class Blog extends Vue {
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
/* stylelint-disable */

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

</style>
