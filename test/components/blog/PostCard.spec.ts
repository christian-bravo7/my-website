import PostCard from '@/components/blog/PostCard.vue';
import { mount, RouterLinkStub } from '@vue/test-utils';

describe('PostCard component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PostCard, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
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
