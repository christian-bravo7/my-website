import { mount, RouterLinkStub } from '@vue/test-utils';

import Error from '@/layouts/error.vue';
import RandomFigures from '@/components/brand-figures/RandomFigures.vue';

describe('error page', () => {
  it('should render correclty', () => {
    const wrapper = mount(Error, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Nuxt: {
          template: '<div></div>',
        },
      },
      components: {
        RandomFigures,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
