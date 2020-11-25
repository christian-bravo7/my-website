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
            class="relative z-10 md:z-0 md:absolute max-w-screen-sm md:max-w-none right-0 bottom-0 text-4xl sm:text-6xl md:text-12xl mx-auto md:mr-8 pt-24 px-4 md:pt-0 md:px-0 font-bold text-right text-gray-300 dark:text-blue-700 select-none text-min-content order-1"
          >
            {{ grettingWord }}
          </h1>
          <div class="container mx-auto px-4 md:px-0 py-8 md:py-20 relative z-10">
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
                title="placholder"
                description="placeholder"
                path="placeholder"
                background-image="placeholder"
                :placeholder="true"
              />
            </div>
          </div>
        </div>
      </transition>
    </Portal>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import baffle from 'baffle';

@Component({
  async asyncData ({ $content, error }): Promise<any> {
    const articles = await $content()
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      articles,
    };
  },
  head () {
    return {
      title: this.$t('navigation.blog-label') as string,
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

  get grettingWord (): string {
    const now = new Date();
    const hours = now.getHours();

    const greetings: any = [
      {
        greet: 'Good Night!',
        test: hours >= 21 && hours <= 24,
      },
      {
        greet: 'Good Evening!',
        test: hours >= 18 && hours <= 20,
      },
      {
        greet: 'Good Afternoon!',
        test: hours >= 13 && hours <= 17,
      },
      {
        greet: 'Good Noon!',
        test: hours === 12,
      },
      {
        greet: 'Have a nice day!',
        test: hours >= 9 && hours <= 11,
      },
      {
        greet: 'Good Morning!',
        test: hours >= 1 && hours <= 8,
      },
    ];

    return greetings.find((el: any) => el.test).greet;
  }

  shuffleText (): void {
    // @ts-ignore
    const greetingText = baffle('#greeting', { speed: 80 });
    greetingText.reveal(1000);
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
