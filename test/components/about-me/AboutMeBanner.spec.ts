import { createLocalVue, mount } from '@vue/test-utils';

import AboutMeBanner from '@/components/about-me/AboutMeBanner.vue';
import AppBanner from '@/components/app/AppBanner.vue';

import setupI18n from '@/test/config/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('AboutMeBanner component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeBanner, {
      components: {
        AppBanner,
      },
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render primary and seconday text', () => {
    const wrapper = mount(AboutMeBanner, {
      components: {
        AppBanner,
      },
      ...componentConfig,
    });

    const primaryText = wrapper.find('.app-banner__primary-text');
    const secondaryText = wrapper.find('#secondary');

    expect(primaryText.text()).toBe('Helping companies achieve their goals, doing what I love');
    expect(secondaryText.text()).toBe('About me');
  });
});
