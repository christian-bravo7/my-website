import { mount } from '@vue/test-utils';

import ErrorLayout from '@/layouts/error-layout.vue';
import ErrorFigures from '@/components/brand-figures/ErrorFigures.vue';

describe('error layout', () => {
  it('should render correclty', () => {
    const wrapper = mount(ErrorLayout, {
      components: {
        ErrorFigures,
      },
      stubs: {
        Nuxt: {
          template: '<div></div>',
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
