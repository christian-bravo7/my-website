/* eslint-disable @typescript-eslint/explicit-function-return-type */

import VueI18n from 'vue-i18n';

const loadEnglishMessages = () => {
  const messages = require('@/lang/en.json');

  return {
    en: messages,
  };
};

const setupI18n = (Vue) => {
  Vue.use(VueI18n);

  const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadEnglishMessages(),
  });

  return i18n;
};

export default setupI18n;
