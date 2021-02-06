<template>
  <!-- eslint-disable vue-a11y/no-onchange -->
  <div class="inline-block">
    <div class="flex items-center">
      <AppSelect
        v-model="currentLanguage"
        @change="changeLanguage"
        @blur="changeLanguage"
      >
        <template #placeholder="{ label }">
          <span class="flex items-center">
            <i class="material-icons text-sm mr-2">
              translate
            </i>
            {{ label }}
          </span>
        </template>
        <AppSelectOption
          v-for="(language, index) in availableLanguages"
          :key="index"
          :value="language.code"
          :label="language.name"
        >
          {{ language.name }}
        </AppSelectOption>
      </AppSelect>
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
