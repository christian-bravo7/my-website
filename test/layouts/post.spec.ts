import Vuex from 'vuex';
import PortalVue from 'portal-vue';
import { createLocalVue, mount } from '@vue/test-utils';

import Post from '@/layouts/post.vue';
import AppFallbackLoad from '@/components/app/AppFallbackLoad.vue';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(Vuex);

describe('post layout', () => {
  let getters: any;
  let store: any;

  beforeEach(() => {
    getters = {
      'guest/isReady': jest.fn(() => false),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('should render correclty', () => {
    const wrapper = mount(Post, {
      store,
      localVue,
      components: {
        AppFallbackLoad,
      },
      stubs: {
        ClientOnly: {
          template: '<div></div>',
        },
        Nuxt: {
          template: '<div></div>',
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
