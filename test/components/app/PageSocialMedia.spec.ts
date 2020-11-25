import PageSocialMedia from '@/components/app/PageSocialMedia.vue';
import FooterSocialIcon from '@/components/app/FooterSocialIcon.vue';
import { mount } from '@vue/test-utils';

describe('PageSocialMedia component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PageSocialMedia, {
      components: {
        FooterSocialIcon,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display 4 social icons', () => {
    const wrapper = mount(PageSocialMedia, {
      components: {
        FooterSocialIcon,
      },
    });

    const socialIcons = wrapper.findAllComponents(FooterSocialIcon);

    expect(socialIcons.length).toBe(4);
  });
});
