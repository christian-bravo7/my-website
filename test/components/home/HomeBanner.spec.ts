import { mount } from '@vue/test-utils';
import MockDate from 'mockdate';

import HomeBanner from '@/components/home/HomeBanner.vue';
import AppBanner from '@/components/app/AppBanner.vue';

describe('HomeBanner component', () => {
  it('should render correctly', () => {
    const wrapper = mount(HomeBanner, {
      components: {
        AppBanner,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render primary and seconday text', () => {
    MockDate.set('Wed Nov 25 2020 21:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(HomeBanner, {
      components: {
        AppBanner,
      },
    });

    const primaryText = wrapper.find('.app-banner__primary-text');
    const insideTexts = primaryText.findAll('span.text-center.block');
    const firstText = insideTexts.at(0);
    const secondText = insideTexts.at(1);

    const secondaryText = wrapper.find('#secondary');

    expect(firstText.text()).toBe('home.iam-name-text');
    expect(secondText.text()).toBe('home.iam-job-text');
    expect(secondaryText.text()).toBe('greeting.good-evening');
  });
});
