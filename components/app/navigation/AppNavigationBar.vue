<template>
  <AppNavigationBarBase>
    <template #left>
      <div class="hidden md:flex">
        <AppLogo />
      </div>
    </template>
    <template #center>
      <div class="hidden | w-full | md:flex items-center justify-end col-span-3">
        <div class="flex content-center | mr-6">
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
        </div>
      </div>
    </template>
    <template #right>
      <div class="hidden | md:flex items-center justify-end col-span-1">
        <div class="mr-4">
          <LanguagePicker />
        </div>
        <div class="flex justify-center items-center">
          <DarkModeSwitch />
        </div>
      </div>
      <div class="flex md:hidden justify-end items-center">
        <AppBurgerButton
          :is-active="isSidebarActive"
          @click="toggleSidebar"
        />
      </div>
    </template>
  </AppNavigationBarBase>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class AppNavigationBar extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly isSidebarActive!: boolean;

  @Emit('openSidebar')
  openSidebar (): void {}

  @Emit('toggleSidebar')
  toggleSidebar (): void {}
}
</script>
