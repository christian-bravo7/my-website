import { createLocalVue, mount } from '@vue/test-utils';
import MockDate from 'mockdate';

import setupI18n from '@/test/i18n';
import HomeBanner from '@/components/banners/HomeBanner.vue';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('HomeBanner component', () => {
  it('should render correctly', () => {
    MockDate.set('Wed Nov 25 2020 21:00:00 GMT-0600 (Central Standard Time)');
    const wrapper = mount(HomeBanner, {
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render primary and seconday text', () => {
    MockDate.set('Wed Nov 25 2020 21:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(HomeBanner, {
      ...componentConfig,
    });

    const primaryText = wrapper.find('.app-banner__primary-text');
    const insideTexts = primaryText.findAll('span.text-center.block');
    const firstText = insideTexts.at(0);
    const secondText = insideTexts.at(1);

    const secondaryText = wrapper.find('#secondary');

    expect(firstText.text()).toBe('Hi, I\'m Christian Bravo');
    expect(secondText.text()).toBe('Frontend developer');
    expect(secondaryText.text()).toBe('Good evening');
  });
});
