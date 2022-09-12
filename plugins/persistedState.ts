import { Context } from '@nuxt/types';

import VuexPersist from 'vuex-persist';

import { guestStore } from '@/store';

export default ({ store }: Context): void => {
  window.onNuxtReady(() => {
    guestStore.setStoreReady();
    new VuexPersist({
      key: 'christian-bravo',
      // reducer: persistedReducer,
    }).plugin(store);
  });
};

// const persistedReducer = state => ({
//   // Keep store structure
//   guest: {
//     theme: state.guest.theme,
//   },
// });
