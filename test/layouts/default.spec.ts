import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

import Default from '@/layouts/default.vue';
import AppFallbackLoad from '@/components/app/AppFallbackLoad.vue';

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
    const wrapper = mount(Default, {
      store,
      localVue,
      components: {
        AppFallbackLoad,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
