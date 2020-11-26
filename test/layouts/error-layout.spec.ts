import { mount } from '@vue/test-utils';

import ErrorLayout from '@/layouts/error-layout.vue';
import ErrorMovableFigures from '@/components/app/ErrorMovableFigures.vue';

describe('error layout', () => {
  it('should render correclty', () => {
    const wrapper = mount(ErrorLayout, {
      components: {
        ErrorMovableFigures,
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
