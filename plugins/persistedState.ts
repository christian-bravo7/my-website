import { Context } from '@nuxt/types';
import createPersistedState from 'vuex-persistedstate';

export default ({ store }: Context): void => {
  window.onNuxtReady(() => {
    console.log('hello world');
    createPersistedState({
      key: 'christian-bravo',
      paths: [
        'guest.theme',
      ],
    })(store);
  });
};
