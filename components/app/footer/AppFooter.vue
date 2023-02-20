<template>
  <footer class="py-10 px-4 | rounded-t-xl | bg-gray-100 dark:bg-dark-theme-900 | text-gray-700 dark:text-gray-300">
    <div class="container | my-0 mx-auto">
      <div class="flex justify-between flex-col md:flex-row">
        <div class="flex items-center flex-col md:flex-row | mb-6 md:mb-0">
          <div class="mr-0 mb-4 md:mr-8 md:mb-0">
            <AppLogo class="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div class="flex flex-col | text-center md:text-left | text-base md:text-lg">
            <h3>
              Christian Bravo
            </h3>
            <h4 class="text-sm">
              {{ $t('footer.frontend-developer') }}
            </h4>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center md:items-end | text-right">
          <div class="text-sm">
            <span
              role="img"
              aria-label="copyright symbol"
            >
              ©
            </span>
            <span>
              {{ currentYear }} Christian Bravo
            </span>
          </div>
          <span class="text-xs">
            {{ $t('footer.made-with-love') }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppFooter extends Vue {
  get currentYear (): number {
    return new Date().getFullYear();
  }
}
</script>
