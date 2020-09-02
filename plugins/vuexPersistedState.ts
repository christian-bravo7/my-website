import { Context } from '@nuxt/types';
import createPersistedState from 'vuex-persistedstate';

export default ({ store }: Context): void => {
  createPersistedState({
    key: 'hello',
    paths: [
      'initial',
    ],
  })(store);
};
