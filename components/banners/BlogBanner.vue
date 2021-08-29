<template>
  <div class="container mx-auto py-20">
    <div class="flex flex-col items-center | mb-12">
      <h1 class="text-7xl font-bold | mb-2">
        {{ $t(greetingKey) }}
      </h1>
      <p class="text-lg">
        {{ $t('blog.welcome-text') }}
      </p>
    </div>
    <div class="flex justify-center">
      <AppInput
        id="post-search"
        v-model="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { greetingByHour } from '@/utils/date/greetingByHour';

@Component
export default class BlogBanner extends Vue {
  value = '';

  get greetingKey (): string {
    const greetingKey = greetingByHour();

    return `greeting.${greetingKey}`;
  }
}
</script>
