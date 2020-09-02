/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import initial from '@/store/initial';

let initialStore: initial;

function initializeStores (store: Store<any>): void {
  initialStore = getModule(initial, store);
}

export { initializeStores, initialStore };
