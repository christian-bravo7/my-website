import FooterSocialIcon from '@/components/app/FooterSocialIcon.vue';
import { mount } from '@vue/test-utils';

describe('FooterSocialIcon component', () => {
  it('should render correclty', () => {
    const wrapper = mount(FooterSocialIcon, {
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
    const wrapper = mount(FooterSocialIcon, {
      slots: {
        default: 'I am slot content',
      },
      propsData: {
        link: 'http://localhost/',
      },
    });

    const slotContent = wrapper.find('.footer-social-icon');
    expect(slotContent.text()).toBe('I am slot content');
  });
});
