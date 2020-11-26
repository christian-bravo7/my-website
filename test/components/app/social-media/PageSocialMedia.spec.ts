import PageSocialMedia from '@/components/app/social-media/PageSocialMedia.vue';
import SocialIcon from '@/components/app/social-media/SocialIcon.vue';
import { mount } from '@vue/test-utils';

describe('PageSocialMedia component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PageSocialMedia, {
      components: {
        SocialIcon,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display 4 social icons', () => {
    const wrapper = mount(PageSocialMedia, {
      components: {
        SocialIcon,
      },
    });

    const socialIcons = wrapper.findAllComponents(SocialIcon);

    expect(socialIcons.length).toBe(4);
  });
});
