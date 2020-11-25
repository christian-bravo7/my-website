import Vuex from 'vuex';
import Blog from '@/layouts/blog.vue';
import { createLocalVue, mount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('blog layout', () => {
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
    const wrapper = mount(Blog, {
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
