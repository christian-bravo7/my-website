<template>
  <!-- eslint-disable vue-a11y/no-onchange -->
  <div class="inline-block">
    <div class="flex items-center">
      <i class="material-icons text-sm -mr-3 text-pink-800 dark:text-blue-500">
        translate
      </i>
      <select
        id="languagePicker"
        v-model="currentLanguage"
        class="px-4 text-base bg-transparent border-none cursor-pointer appearance-none text-pink-800 dark:text-blue-500"
        name="language-picker"
        @change="changeLanguage"
        @blur="changeLanguage"
      >
        <option
          v-for="(language, index) in availableLanguages"
          :key="index"
          class="text-black"
          :value="language.code"
        >
          {{ language.name }}
        </option>
      </select>
      <i class="material-icons text-sm -ml-3 text-pink-800 dark:text-blue-500 pointer-events-none">
        expand_more
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class LanguagePicker extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly abbreviation!: boolean;

  language: string = '';

  get currentLanguage (): string {
    return this.language || this.$i18n.locale;
  }

  set currentLanguage (language: string) {
    this.language = language;
  }

  get availableLanguages (): Array<any> {
    // @ts-ignore
    return this.$i18n.locales;
  }

  @Emit('language-changed')
  changeLanguage (): void {
    this.$router.push(this.switchLocalePath(this.currentLanguage));
  }
}
</script>
