import { mount } from '@vue/test-utils';

import SocialIcon from '@/components/app/social-media/SocialIcon.vue';

describe('SocialIcon component', () => {
  it('should render correclty', () => {
    const wrapper = mount(SocialIcon, {
      slots: {
        default: '<svg></svg>',
      },
      propsData: {
        link: 'http://localhost/',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display slot content', () => {
    const wrapper = mount(SocialIcon, {
      slots: {
        default: 'I am slot content',
      },
      propsData: {
        link: 'http://localhost/',
      },
    });

    const slotContent = wrapper.find('.social-icon');
    expect(slotContent.text()).toBe('I am slot content');
  });
});
