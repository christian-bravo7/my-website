import { mount } from '@vue/test-utils';

import PostBanner from '@/components/banners/PostBanner.vue';

describe('PostBanner component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PostBanner, {
      propsData: {
        image: 'image.png',
        date: [2020, 10, 24],
        title: 'my new post',
        description: 'welcome to my new post',
        minutes: 2,
        url: 'localhost/my-new-post',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should format created date', () => {
    const wrapper = mount(PostBanner, {
      propsData: {
        image: 'image.png',
        date: [2020, 10, 24],
        title: 'my new post',
        description: 'welcome to my new post',
        minutes: 2,
        url: 'localhost/my-new-post',
      },
    });

    const date = wrapper.find('span.text-gray-200');

    expect(date.text()).toBe('Oct 24, 2020');
  });
});
