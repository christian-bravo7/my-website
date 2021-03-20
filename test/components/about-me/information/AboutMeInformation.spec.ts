import { mount } from '@vue/test-utils';

import AboutMeInformation from '@/components/about-me/information/AboutMeInformation.vue';

describe('AboutMeInformation component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeInformation);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display title and description', () => {
    const wrapper = mount(AboutMeInformation);

    const title = wrapper.find('h2');
    const descriptionText = wrapper.find('p');

    expect(title.text()).toBe('me.hi-label');
    expect(descriptionText.text()).toBe('me.about-me-description');
  });
});
