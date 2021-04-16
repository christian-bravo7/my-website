import { createLocalVue, mount } from '@vue/test-utils';

import AppNavigationBar from '@/components/app/navigation/AppNavigationBar.vue';
import AppNavigationBarBase from '@/components/app/navigation/AppNavigationBarBase.vue';
import setupI18n from '@/test/config/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('AppNavigationBar component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AppNavigationBar, {
      components: {
        AppNavigationBarBase,
      },
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
