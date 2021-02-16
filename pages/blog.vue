<template>
  <section>
    <Portal to="page-banner">
      <transition
        name="flash-text"
        @enter="shuffleText"
      >
        <div class="pt-0 md:pt-20">
          <h1
            id="greeting"
            class="relative z-10 md:z-0 md:absolute max-w-screen-sm md:max-w-none right-0 bottom-0 text-4xl sm:text-6xl md:text-12xl mx-auto md:mr-8 pt-24 px-4 md:pt-0 md:px-0 font-bold text-right text-gray-300 dark:text-blue-900 select-none text-min-content order-1"
          >
            {{ greetingWord }}
          </h1>
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
      </transition>
    </Portal>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import { Vue, Component } from 'nuxt-property-decorator';
import baffle from 'baffle';

import { greetingByHour } from '@/utils/date/greetingByHour';
import { getMetaTags } from '@/seo';
import { IContentDocument } from '@nuxt/content/types/content';

@Component({
  middleware: ['redirectEnglishPath'],
  head () {
    const homeMetaTags = getMetaTags({
      siteTitle: this.$t('navigation.blog-label') as string,
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

  get greetingWord (): string {
    return greetingByHour();
  }

  shuffleText (): void {
    // @ts-ignore
    const greetingText = baffle('#greeting', { speed: 80 });
    greetingText.reveal(1000);
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
