import { mount } from '@vue/test-utils';

import AppNavigationBarLink from '@/components/app/navigation/AppNavigationBarLink.vue';

describe('AppNavigationBarLink component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AppNavigationBarLink, {
      propsData: {
        to: '/hello',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
