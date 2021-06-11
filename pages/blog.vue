<template>
  <section>
    <BlogBanner />
    <div class="container mx-auto px-4 md:px-0">
      <div class="blog-grid">
        <PostCard
          v-for="(article, index) in articles"
          :key="index"
          v-bind="article"
          :first="index === 0"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import { Vue, Component } from 'nuxt-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';

import { getMetaTags } from '@/seo';

@Component({
  layout: 'blog',
  head () {
    const homeMetaTags = getMetaTags({
      siteTitle: 'Blog',
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
}
</script>

<style lang="scss" scoped>
.blog-grid {
  grid-template-columns: repeat(1, 1fr);

  @apply grid gap-4;

  & > * {
    &::after {
      display: block;
      padding-bottom: 100%;
      content: "";
    }
  }

  @screen md {
    grid-template-columns: repeat(2, 1fr);

    & > * {
      &:first-child {
        grid-column: 1 / 3;
        grid-row: 1 / 3;

        &::after {
          padding-bottom: 80%;
        }
      }
    }
  }

  @screen lg {
    & > * {
      &:first-child {
        &::after {
          padding-bottom: 100%;
        }
      }
    }

    grid-template-columns: repeat(3, 1fr);
  }

  @screen xl {
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
