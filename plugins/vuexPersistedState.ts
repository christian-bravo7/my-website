import { Context } from '@nuxt/types';
import createPersistedState from 'vuex-persistedstate';

export default ({ store }: Context): void => {
  createPersistedState({
    key: 'yourkey',
    // paths: [...]
  })(store);
};
