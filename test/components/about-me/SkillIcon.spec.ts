import { mount } from '@vue/test-utils';

import SkillIcon from '@/components/about-me/SkillIcon.vue';

describe('SkillIcon component', () => {
  it('should render correctly', () => {
    const wrapper = mount(SkillIcon, {
      propsData: {
        name: 'This is an icon text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display name text as prop', () => {
    const wrapper = mount(SkillIcon, {
      propsData: {
        name: 'This is an icon text',
      },
    });

    const name = wrapper.find('span.text-base.font-bold');

    expect(name.text()).toBe('This is an icon text');
  });

  it('should render child component as default slot', () => {
    const wrapper = mount(SkillIcon, {
      propsData: {
        name: 'This is an icon text',
      },
      slots: {
        default: {
          template: '<h1>This is a default slot</h1>',
        },
      },
    });

    const slotContent = wrapper.find('h1');

    expect(slotContent.text()).toBe('This is a default slot');
  });
});
