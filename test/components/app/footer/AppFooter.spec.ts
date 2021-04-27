import { createLocalVue, mount } from '@vue/test-utils';

import AppFooter from '@/components/app/footer/AppFooter.vue';

import setupI18n from '@/test/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('AppFooter component', () => {
  it('should render correclty', () => {
    const wrapper = mount(AppFooter, {
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
