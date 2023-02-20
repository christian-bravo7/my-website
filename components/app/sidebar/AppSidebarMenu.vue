<template>
  <!-- eslint-disable vue-a11y/click-events-have-key-events -->
  <transition
    name="overlay"
    appear
    @after-enter="openSidebar"
  >
    <div
      class="block md:hidden | fixed inset-0 z-20 | w-full h-full | bg-transparent | overlay"
      @click.self="closeSidebar"
      @keydown.enter="closeSidebar"
    >
      <transition
        name="sidebar"
        @after-leave="closeSidebarOverlay"
      >
        <aside
          v-show="isSidebarVisible"
          class="absolute inset-y-0 right-0 w-full h-full max-w-sm p-0 bg-gray-50 dark:bg-dark-theme-800 rounded-3xl rounded-r-none sidebar-grid"
        >
          <section class="flex justify-end p-10" />
          <section class="flex flex-col items-start p-4">
            <AppSidebarLink
              :to="localePath({ name: 'index'})"
              @click="closeSidebar"
              @keydown.enter="closeSidebar"
            >
              {{ $t('navigation.home-label') }}
            </AppSidebarLink>
            <AppSidebarLink
              :to="localePath({ name: 'me'})"
              @click="closeSidebar"
              @keydown.enter="closeSidebar"
            >
              {{ $t('navigation.about-me-label') }}
            </AppSidebarLink>
          </section>
          <section class="flex justify-between p-4">
            <DarkModeSwitch />
            <LanguagePicker
              v-if="hasLanguagePicker"
              :is-top-right="true"
              @language-changed="closeSidebar"
            />
          </section>
        </aside>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class AppSidebarMenu extends Vue {
  isSidebarVisible: boolean = false;

  @Prop({ type: Boolean, default: false })
  readonly onlyEnglish!: boolean;

  @Prop({ type: Boolean, default: true })
  readonly hasLanguagePicker!: boolean;

  closeSidebar (): void {
    this.isSidebarVisible = false;
  }

  openSidebar (): void {
    this.isSidebarVisible = true;
  }

  @Emit('onSidebarClose')
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

@include dark-mode {
  .overlay {
    &::before {
      @apply bg-dark-theme-900 bg-opacity-75;
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
