import { mount } from '@vue/test-utils';

import ErrorLayout from '@/layouts/error-layout.vue';

describe('error layout', () => {
  it('should render correclty', () => {
    const wrapper = mount(ErrorLayout, {
      stubs: {
        Nuxt: {
          template: '<div></div>',
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
