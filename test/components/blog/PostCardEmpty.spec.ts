import PostCardEmpty from '@/components/blog/PostCardEmpty.vue';
import { mount } from '@vue/test-utils';

describe('PostCardEmpty component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PostCardEmpty);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display placeholder text', () => {
    const wrapper = mount(PostCardEmpty);

    const allTexts = wrapper.findAll('p');

    const firstText = allTexts.at(0);
    const secondText = allTexts.at(1);

    expect(firstText.text()).toBe('Writing cool things...');
    expect(secondText.text()).toBe('Come back soon :)');
  });
});
