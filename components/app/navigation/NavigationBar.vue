<template>
  <nav
    class="fixed top-0 left-0 right-0 z-20 | p-4  | bg-transparent | transition-all duration-150 | navbar"
    :class="{ 'bg-black bg-opacity-25': onlyWhite}"
  >
    <div class="grid grid-cols-2 md:grid-cols-5">
      <AppLogo :class="{ 'only-white': onlyWhite }" />
      <div class="hidden | md:flex items-center justify-center col-span-3">
        <div class="flex content-center">
          <NavigationLink
            :class="{ 'only-white': onlyWhite }"
            :is-only-english="onlyEnglish"
            path="index"
          >
            <template v-if="onlyEnglish">
              Home
            </template>
            <template v-else>
              {{ $t('navigation.home-label') }}
            </template>
          </NavigationLink>
          <NavigationLink
            :class="{ 'only-white': onlyWhite }"
            :is-only-english="onlyEnglish"
            path="me"
          >
            <template v-if="onlyEnglish">
              About me
            </template>
            <template v-else>
              {{ $t('navigation.about-me-label') }}
            </template>
          </NavigationLink>
          <NavigationLink
            :class="{ 'only-white': onlyWhite }"
            :is-only-english="onlyEnglish"
            path="blog"
          >
            <template v-if="onlyEnglish">
              Blog
            </template>
            <template v-else>
              {{ $t('navigation.blog-label') }}
            </template>
          </NavigationLink>
        </div>
      </div>
      <div class="hidden | md:flex items-center justify-end col-span-1">
        <div
          v-if="hasLanguagePicker"
          class="mr-8"
        >
          <LanguagePicker :abbreviation="true" />
        </div>
        <div class="flex justify-center items-center">
          <DarkModeSwitch />
        </div>
      </div>
      <div class="flex md:hidden justify-end items-center">
        <button
          class="text-gray-900 dark:text-gray-50"
          :class="{ 'only-white': onlyWhite }"
          @click="openSidebar"
          @keydown.enter="openSidebar"
        >
          <span class="material-icons | text-5xl">
            menu
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class NavigationBar extends Vue {
  @Prop({ type: Boolean, default: true })
  readonly hasLanguagePicker!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly onlyEnglish!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly onlyWhite!: boolean;

  @Emit('openSidebar')
  openSidebar (): void {}
}
</script>

<style scoped>
/* stylelint-disable */

@screen md {
  .navbar {
    backdrop-filter: blur(100px);
  }
}

.only-white {
  @apply text-white !important;
}
</style>
