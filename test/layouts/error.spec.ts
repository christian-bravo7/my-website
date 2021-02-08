import { mount, RouterLinkStub } from '@vue/test-utils';

import Error from '@/layouts/error.vue';

import ErrorFigures from '@/components/brand-figures/ErrorFigures.vue';

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
      components: {
        ErrorFigures,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
