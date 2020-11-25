import BannerBlog from '@/components/blog/BannerBlog.vue';
import { mount } from '@vue/test-utils';

describe('BannerBlog component', () => {
  it('should render correclty', () => {
    const wrapper = mount(BannerBlog, {
      propsData: {
        imageSource: 'image.png',
        createdAt: '2020-10-24T17:53:36.488Z',
        title: 'my new post',
        description: 'welcome to my new post',
        minutesToRead: 2,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should format created date', () => {
    const wrapper = mount(BannerBlog, {
      propsData: {
        imageSource: 'image.png',
        createdAt: '2020-10-24T17:53:36.488Z',
        title: 'my new post',
        description: 'welcome to my new post',
        minutesToRead: 2,
      },
    });

    const date = wrapper.find('span.text-xs.text-center.text-gray-300');

    expect(date.text()).toBe('October 24, 2020');
  });
});
