import { mount } from '@vue/test-utils';

import PostCard from '@/components/pages/blog/PostCard.vue';

describe('PostCard component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        image: 'image.png',
        path: 'something-cool',
        title: 'awesome post',
        description: 'this is the amazing post ever',
        date: [2021, 2, 31],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
