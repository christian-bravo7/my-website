<template>
  <!-- eslint-disable vue-a11y/no-onchange -->
  <div class="language-picker">
    <div class="language-picker__flex-wrapper">
      <i class="material-icons language-picker__language-icon">
        translate
      </i>
      <select
        id="languagePicker"
        v-model="currentLanguage"
        class="language-picker__select"
        name="language-picker"
        @change="changeLanguage"
        @blur="changeLanguage"
      >
        <option
          v-for="(language, index) in availableLanguages"
          :key="index"
          class="language-picker__option"
          :value="language.code"
        >
          {{ language.name }}
        </option>
      </select>
      <i class="material-icons language-picker__arrow-icon">
        expand_more
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class LanguagePicker extends Vue {
  @Prop({ type: Boolean, default: false }) readonly abbreviation!: boolean;
  language: string = '';

  get currentLanguage (): string {
    return this.language || this.$i18n.locale;
  }

  set currentLanguage (language: string) {
    this.language = language;
  }

  get availableLanguages (): any {
    return [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
    ];
  }

  changeLanguage (): void {
    this.$router.push(this.switchLocalePath(this.currentLanguage));
    this.languageChanged();
  }

  @Emit('language-changed')
  languageChanged (): void {}
}
</script>

<style lang="scss" scoped>

.language-picker {
  display: inline-block;

  &__flex-wrapper {
    display: flex;
    align-items: center;
  }

  &__select,
  &__option {
    font-size: rem(12);
  }

  &__option {
    color: var(--black);
    font-size: rem(18);
  }

  &__select {
    height: rem(20);
    padding: 0 rem(16);
    color: var(--asset-highlight);
    font-size: rem(16);
    background-color: transparent;
    border: none;
    cursor: pointer;
    appearance: none;
  }

  &__language-icon,
  &__arrow-icon {
    color: var(--asset-highlight);
    font-size: rem(12);
  }

  &__language-icon {
    margin-right: rem(-12);
  }

  &__arrow-icon {
    margin-left: rem(-10);
    pointer-events: none;
  }
}

</style>
