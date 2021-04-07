import BannerBlog from '@/components/blog/BannerBlog.vue';
import { mount } from '@vue/test-utils';

describe('BannerBlog component', () => {
  it('should render correclty', () => {
    const wrapper = mount(BannerBlog, {
      propsData: {
        image: 'image.png',
        date: [2020, 10, 24],
        title: 'my new post',
        description: 'welcome to my new post',
        minutes: 2,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should format created date', () => {
    const wrapper = mount(BannerBlog, {
      propsData: {
        image: 'image.png',
        date: [2020, 10, 24],
        title: 'my new post',
        description: 'welcome to my new post',
        minutes: 2,
      },
    });

    const date = wrapper.find('span.text-xs.text-center.text-gray-300');

    expect(date.text()).toBe('Oct 24, 2020');
  });
});
