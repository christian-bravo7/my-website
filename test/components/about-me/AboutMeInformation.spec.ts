import { mount } from '@vue/test-utils';

import AboutMeInformation from '@/components/about-me/AboutMeInformation.vue';

describe('AboutMeInformation component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeInformation, {
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display title and description', () => {
    const wrapper = mount(AboutMeInformation, {
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    const title = wrapper.find('h1');
    const descriptionText = wrapper.find('p');

    expect(title.text()).toBe('me.i-label');
    expect(descriptionText.text()).toBe('me.about-me-description');
  });
});
