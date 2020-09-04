<template>
  <transition
    name="overlay"
    appear
    @after-enter="openSidebar"
  >
    <div
      class="overlay"
      @click.self="closeSidebar"
    >
      <transition
        name="sidebar"
        @after-leave="closeSidebarOverlay"
      >
        <aside
          v-if="isSidebarVisible"
          class="sidebar box"
        >
          <section class="sidebar__header">
            <button
              class="button sidebar__close-button"
              @click="closeSidebar"
            >
              <i class="material-icons sidebar__close-button-icon">
                close
              </i>
            </button>
          </section>
          <section class="sidebar__content">
            <section class="sidebar__body">
              <div class="sidebar__links">
                <NuxtLink
                  class="sidebar__link"
                  :to="localePath({ name: 'index' })"
                >
                  Home
                </NuxtLink>
                <NuxtLink
                  class="sidebar__link"
                  :to="localePath({ name: 'me' })"
                >
                  About me
                </NuxtLink>
              </div>
            </section>
            <section class="sidebar__footer">
              <ThemeSwitch />
              <LanguagePicker @language-changed="closeSidebar" />
            </section>
          </section>
        </aside>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator';

import LanguagePicker from '@/components/LanguagePicker.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

@Component({
  components: {
    ThemeSwitch,
    LanguagePicker,
  },
})
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: transparent;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--text-light);
    filter: opacity(0.6);
    content: '';
  }
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: rem(320);
  height: 100vh;
  padding: 0;
  background-color: var(--background);
  border-radius: rem(20) 0 0 rem(20);

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: rem(24);
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: rem(16);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  &__dark-theme {
    display: flex;
    align-items: center;
  }

  &__close-button-icon {
    color: var(--text);
    font-size: rem(24);
  }

  &__close-button {
    height: auto;
    padding: rem(8);
    background-color: transparent;
    border-color: var(--text);
    border-radius: 50%;
    transition-duration: 250ms;
    transition-property: background-color, color;

    &:hover {
      background-color: var(--text);

      .sidebar__close-button-icon {
        color: var(--background);
      }
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
  }

  &__link {
    color: var(--asset-highlight);
    font-weight: $weight-bold;
    font-size: $size-3;
  }
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
