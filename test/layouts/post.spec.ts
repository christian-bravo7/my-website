import Vuex from 'vuex';
import Post from '@/layouts/post.vue';
import { createLocalVue, mount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('post layout', () => {
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
    const wrapper = mount(Post, {
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
