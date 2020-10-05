/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import guest from '@/store/guest';

let guestStore: guest;

function initializeStores (store: Store<any>): void {
  guestStore = getModule(guest, store);
}

export {
  initializeStores,
  guestStore,
};
