import PostCard from '@/components/blog/PostCard.vue';
import { mount } from '@vue/test-utils';

describe('PostCard component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        image: 'image.png',
        path: 'something-cool',
        title: 'awesome post',
        description: 'this is the amazing post ever',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
