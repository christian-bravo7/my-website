import { mount } from '@vue/test-utils';

import AboutMeSkills from '@/components/about-me/skills/AboutMeSkills.vue';
import SkillIcon from '@/components/about-me/skills/SkillIcon.vue';

describe('AboutMeSkills component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a title', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
    });

    const title = wrapper.find('h2');

    expect(title.text()).toBe('me.skills-label');
  });

  it('should render multiple SkillIcon components', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
    });

    const icons = wrapper.findAllComponents(SkillIcon);

    expect(icons.length).toBe(11);
  });
});
