import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import Default from '@/layouts/default.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('default layout', () => {
  let getters: any;
  let store: any;

  beforeEach(() => {
    getters = {
      'guest/isAppInitialized': jest.fn(() => false),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('should render correclty', () => {
    const wrapper = shallowMount(Default, {
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
