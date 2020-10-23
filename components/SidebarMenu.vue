<template>
  <!-- eslint-disable vue-a11y/click-events-have-key-events -->
  <transition
    name="overlay"
    appear
    @after-enter="openSidebar"
  >
    <div
      class="fixed inset-0 z-30 w-full h-full bg-transparent overlay"
      @click.self="closeSidebar"
    >
      <transition
        name="sidebar"
        @after-leave="closeSidebarOverlay"
      >
        <aside
          v-if="isSidebarVisible"
          class="absolute inset-y-0 right-0 w-full h-full max-w-sm p-0 bg-gray-50 dark:bg-blue-600 rounded-3xl rounded-r-none sidebar-grid"
        >
          <section class="flex justify-end p-4">
            <button
              class="flex md:hidden justify-items-center items-center text-gray-900 dark:text-gray-50"
              @click="closeSidebar"
              @keydown.enter="closeSidebar"
            >
              <i class="material-icons text-5xl">
                close
              </i>
            </button>
          </section>
          <section class="flex flex-col items-start p-4">
            <div
              class="mb-4"
              @click="closeSidebar"
              @keydown.enter="closeSidebar"
            >
              <NuxtLink
                class="text-pink-800 dark:text-blue-500 font-bold text-3xl"
                :to="localePath({ name: 'index' })"
              >
                {{ $t('navigation.home-label') }}
              </NuxtLink>
            </div>
            <div
              class="mb-4"
              @click="closeSidebar"
              @keydown.enter="closeSidebar"
            >
              <NuxtLink
                class="text-pink-800 dark:text-blue-500 font-bold text-3xl"
                :to="localePath({ name: 'me' })"
              >
                {{ $t('navigation.about-me-label') }}
              </NuxtLink>
            </div>
          </section>
          <section class="flex justify-between p-4">
            <ThemeSwitch />
            <LanguagePicker @language-changed="closeSidebar" />
          </section>
        </aside>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator';

@Component
export default class SidebarMenu extends Vue {
  isSidebarVisible: boolean = false;

  closeSidebar (): void {
    this.isSidebarVisible = false;
  }

  openSidebar (): void {
    this.isSidebarVisible = true;
  }

  @Emit('closeSidebar')
  closeSidebarOverlay (): void {}
}

</script>

<style lang="scss" scoped>

.overlay {
  &::before {
    @apply absolute w-full h-full bg-gray-300 bg-opacity-75;

    content: '';
  }
}

html.dark-mode {
  .overlay {
    &::before {
      @apply bg-blue-700 bg-opacity-75;
    }
  }
}

.sidebar-grid {
  @apply grid;

  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
}

// OVERLAY TRANSITIONS

.overlay-enter,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: 0.25s;
}

.overlay-enter-to,
.overlay-leave {
  opacity: 1;
}

// SIDEBAR TRANSITIONS

.sidebar-enter,
.sidebar-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.sidebar-enter-active {
  transition: 0.25s;
}

.sidebar-leave-active {
  transition: 0.4s;
}

.sidebar-enter-to,
.sidebar-leave {
  transform: translateX(0);
  opacity: 1;
}

</style>
