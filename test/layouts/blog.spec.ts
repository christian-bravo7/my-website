import Vuex from 'vuex';
import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';

import Blog from '@/layouts/blog.vue';
import AppFallbackLoad from '@/components/app/AppFallbackLoad.vue';
import NavigationBar from '@/components/app/navigation/NavigationBar.vue';
import SidebarMenu from '@/components/app/navigation/SidebarMenu.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('blog layout', () => {
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
    const wrapper = mount(Blog, {
      store,
      localVue,
      stubs: {
        ClientOnly: {
          template: '<div></div>',
        },
        Nuxt: {
          template: '<div></div>',
        },
        NuxtLink: RouterLinkStub,
      },
      components: {
        AppFallbackLoad,
        SidebarMenu,
        NavigationBar,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
