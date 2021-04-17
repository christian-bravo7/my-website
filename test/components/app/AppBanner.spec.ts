import { mount } from '@vue/test-utils';

import AppBanner from '@/components/app/AppBanner.vue';

describe('AppBanner component', () => {
  it('should render correclty', () => {
    const wrapper = mount(AppBanner, {
      slots: {
        'secondary-text': 'This is a secondary text',
        'primary-text': 'This is a primary text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display slot content for primary and secondary text', () => {
    const wrapper = mount(AppBanner, {
      slots: {
        'secondary-text': 'This is a secondary text',
        'primary-text': 'This is a primary text',
      },
    });

    const primaryText = wrapper.find('.app-banner__primary-text');
    const secondaryText = wrapper.find('#secondary');

    expect(primaryText.text()).toBe('This is a primary text');
    expect(secondaryText.text()).toBe('This is a secondary text');
  });
});
