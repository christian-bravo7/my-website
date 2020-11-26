<template>
  <div
    class="relative bg-white dark:bg-blue-700 bg-opacity-75 dark:bg-opacity-75 hover:bg hover:bg-opacity-100 dark-hover:bg-opacity-100 rounded-lg shadow-md transition-colors duration-200"
  >
    <div class="absolute inset-0 p-2 flex flex-col items-center justify-center select-none">
      <p class="text-gray-600 dark:text-gray-400 text-center">
        Writing cool things...
      </p>
      <p class="text-gray-600 dark:text-gray-400 text-center">
        Come back soon :)
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class PostCardEmpty extends Vue {}
</script>
