import Vue from 'vue';
import VueI18n from 'vue-i18n';

const loadEnglishMessages = (): VueI18n.LocaleMessages => {
  const messages = require('@/lang/en.json');

  return {
    en: messages,
  };
};

const setupI18n = (vue: typeof Vue): VueI18n => {
  vue.use(VueI18n);

  const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadEnglishMessages(),
  });

  return i18n;
};

export default setupI18n;
