import { mount } from '@vue/test-utils';

import AboutMeSkills from '@/components/about-me/AboutMeSkills.vue';
import SkillIcon from '@/components/about-me/SkillIcon.vue';

describe('AboutMeSkills component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a title', () => {
    const wrapper = mount(AboutMeSkills, {
      components: {
        SkillIcon,
      },
      mocks: {
        $t: jest.fn(msg => msg),
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
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    const icons = wrapper.findAllComponents(SkillIcon);

    expect(icons.length).toBe(12);
  });
});
