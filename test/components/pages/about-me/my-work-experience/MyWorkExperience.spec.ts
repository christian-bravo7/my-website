import { createLocalVue, mount } from '@vue/test-utils';

import MyWorkExperience from '@/components/pages/about-me/my-work-experience/MyWorkExperience.vue';

import setupI18n from '@/test/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('MyWorkExperience component', () => {
  it('should render correclty', () => {
    const wrapper = mount(MyWorkExperience, {
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
