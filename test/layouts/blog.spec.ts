import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import MockDate from 'mockdate';

import Blog from '~/layouts/blog.vue';

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

    const wrapper = shallowMount(Blog, {
      store,
      localVue,
      stubs: {
        ClientOnly: {
          template: '<div></div>',
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
