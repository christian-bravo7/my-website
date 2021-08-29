import { mount } from '@vue/test-utils';

import SocialNetworkIcon from '@/components/contact-me/my-social-networks/SocialNetworkIcon.vue';
import MySocialNetworks from '@/components/contact-me/my-social-networks/MySocialNetworks.vue';

describe('MySocialNetworks component', () => {
  it('should render correclty', () => {
    const wrapper = mount(MySocialNetworks);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display 4 social icons', () => {
    const wrapper = mount(MySocialNetworks);

    const SocialNetworkIcons = wrapper.findAllComponents(SocialNetworkIcon);

    expect(SocialNetworkIcons.length).toBe(4);
  });
});
