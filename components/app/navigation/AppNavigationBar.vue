<template>
  <nav
    class="fixed top-0 left-0 right-0 z-20 | p-4  | bg-transparent | transition-all duration-150 | navbar"
  >
    <div class="grid grid-cols-2 md:grid-cols-5">
      <AppLogo />
      <div class="hidden | md:flex items-center justify-center col-span-3">
        <div class="flex content-center">
          <AppNavigationBarLink
            :to="localePath({ name: 'index' })"
          >
            {{ $t('navigation.home-label') }}
          </AppNavigationBarLink>
          <AppNavigationBarLink
            :to="localePath({ name: 'me' })"
          >
            {{ $t('navigation.about-me-label') }}
          </AppNavigationBarLink>
          <AppNavigationBarLink
            to="blog"
          >
            {{ $t('navigation.blog-label') }}
          </AppNavigationBarLink>
        </div>
      </div>
      <div class="hidden | md:flex items-center justify-end col-span-1">
        <div
          class="mr-4"
        >
          <LanguagePicker />
        </div>
        <div class="flex justify-center items-center">
          <DarkModeSwitch />
        </div>
      </div>
      <div class="flex md:hidden justify-end items-center">
        <button
          class="text-gray-900 dark:text-gray-50"
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
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component
export default class AppNavigationBar extends Vue {
  @Emit('openSidebar')
  openSidebar (): void {}
}
</script>

<style lang="scss" scoped>
@screen md {
  .navbar {
    backdrop-filter: blur(100px);
  }
}
</style>
