import { createLocalVue, mount } from '@vue/test-utils';

import setupI18n from '@/test/i18n';
import AboutMeBanner from '@/components/banners/AboutMeBanner.vue';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('AboutMeBanner component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeBanner, {
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render primary and seconday text', () => {
    const wrapper = mount(AboutMeBanner, {
      ...componentConfig,
    });

    const primaryText = wrapper.find('.app-banner__primary-text');
    const secondaryText = wrapper.find('#secondary');

    expect(primaryText.text()).toBe('Helping people to make the world a better place through software');
    expect(secondaryText.text()).toBe('About me');
  });
});
