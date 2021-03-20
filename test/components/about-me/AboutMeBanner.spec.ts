import { mount } from '@vue/test-utils';

import AboutMeBanner from '@/components/about-me/AboutMeBanner.vue';
import AppBanner from '@/components/app/AppBanner.vue';

describe('AboutMeBanner component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeBanner, {
      components: {
        AppBanner,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render primary and seconday text', () => {
    const wrapper = mount(AboutMeBanner, {
      components: {
        AppBanner,
      },
    });

    const primaryText = wrapper.find('.app-banner__primary-text');
    const secondaryText = wrapper.find('#secondary');

    expect(primaryText.text()).toBe('me.simple-description');
    expect(secondaryText.text()).toBe('navigation.about-me-label');
  });
});
