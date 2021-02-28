import Vuex from 'vuex';
import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import MockDate from 'mockdate';

import Blog from '@/layouts/blog.vue';
import AppFallbackLoad from '@/components/app/AppFallbackLoad.vue';
import NavigationBar from '@/components/app/navigation/navigation-bar/AppNavigationBar.vue';
import SidebarMenu from '@/components/app/navigation/sidebar/SidebarMenu.vue';
import SidebarLink from '@/components/app/navigation/sidebar/SidebarLink.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('blog layout', () => {
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
    MockDate.set('Wed Nov 25 2020 23:00:00 GMT-0600 (Central Standard Time)');

    // @ts-ignore
    SidebarMenu.options.components.SidebarLink = SidebarLink;

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
