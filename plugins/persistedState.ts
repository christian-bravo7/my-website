import { Context } from '@nuxt/types';

import createPersistedState from 'vuex-persistedstate';

import { guestStore } from '@/store';

export default ({ store }: Context): void => {
  window.onNuxtReady(() => {
    guestStore.setStoreReady();
    createPersistedState({
      key: 'christian-bravo',
      paths: [
        'guest.theme',
      ],
    })(store);
  });
};
