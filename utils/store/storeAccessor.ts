/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import initial from '@/store/initial';
import guest from '@/store/guest';

let initialStore: initial;
let guestStore: guest;

function initializeStores (store: Store<any>): void {
  initialStore = getModule(initial, store);
  guestStore = getModule(guest, store);
}

export {
  initializeStores,
  initialStore,
  guestStore,
};
