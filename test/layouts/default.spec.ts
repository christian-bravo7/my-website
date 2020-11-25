import Default from '@/layouts/default.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('default layout', () => {
  let getters: any;
  let store: any;

  beforeEach(() => {
    getters = {
      isReady: jest.fn(() => false),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('should render correclty', () => {
    const wrapper = mount(Default, {
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
