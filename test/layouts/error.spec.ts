import { mount, RouterLinkStub } from '@vue/test-utils';

import Error from '@/layouts/error.vue';

describe('error page', () => {
  it('should render correclty', () => {
    const wrapper = mount(Error, {
      mocks: {
        $t: jest.fn(msg => msg),
        localePath: jest.fn(path => path),
      },
      stubs: {
        NuxtLink: RouterLinkStub,
        Nuxt: {
          template: '<div></div>',
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
