import { Store } from 'vuex';
import { initializeStores } from '@/utils/store/storeAccessor';

const initializer = (store: Store<any>): void => initializeStores(store);

export const plugins = [initializer];

export * from '@/utils/store/storeAccessor';
