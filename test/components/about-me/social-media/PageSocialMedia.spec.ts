import { mount } from '@vue/test-utils';

import PageSocialMedia from '@/components/about-me/social-media/AppSocialMedia.vue';
import SocialIcon from '@/components/about-me/social-media/SocialIcon.vue';

describe('PageSocialMedia component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PageSocialMedia);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display 4 social icons', () => {
    const wrapper = mount(PageSocialMedia);

    const socialIcons = wrapper.findAllComponents(SocialIcon);

    expect(socialIcons.length).toBe(4);
  });
});
