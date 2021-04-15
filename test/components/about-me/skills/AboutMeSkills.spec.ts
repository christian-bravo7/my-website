import { createLocalVue, mount } from '@vue/test-utils';

import AboutMeSkills from '@/components/about-me/skills/AboutMeSkills.vue';
import SkillIcon from '@/components/about-me/skills/SkillIcon.vue';

import setupI18n from '@/test/config/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('AboutMeSkills component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a title', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
      ...componentConfig,
    });

    const title = wrapper.find('h2');

    expect(title.text()).toBe('Skills');
  });

  it('should render multiple SkillIcon components', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
      ...componentConfig,
    });

    const icons = wrapper.findAllComponents(SkillIcon);

    expect(icons.length).toBe(11);
  });
});
