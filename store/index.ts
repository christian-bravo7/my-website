/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import guest from '@/store/guest';

let guestStore: guest;

const initializer = (store: Store<any>): void => {
  guestStore = getModule(guest, store);
};

export const plugins = [initializer];

export {
  guestStore,
};
