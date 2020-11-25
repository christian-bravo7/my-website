import PostCard from '@/components/blog/PostCard.vue';
import { mount, RouterLinkStub } from '@vue/test-utils';

describe('PostCard component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PostCard, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        backgroundImage: 'image.png',
        path: 'something-cool',
        title: 'awesome post',
        description: 'this is the amazing post ever',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render placeholder template if prop placeholder is provided', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        placeholder: true,
      },
    });

    const placholderTexts = wrapper.findAll('p');
    const firstText = placholderTexts.at(0);
    const secondText = placholderTexts.at(1);

    expect(firstText.text()).toBe('Writing cool things...');
    expect(secondText.text()).toBe('Come back soon :)');
  });
});
