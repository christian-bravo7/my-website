import PageAuthorCredits from '@/components/app/PageAuthorCredits.vue';
import { mount } from '@vue/test-utils';

describe('PageAuthorCredits component', () => {
  it('should render correclty', () => {
    const wrapper = mount(PageAuthorCredits);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display my page credits', () => {
    const wrapper = mount(PageAuthorCredits);

    const credits = wrapper.find('p');

    expect(credits.text()).toBe('© 2021 CHRISTIAN BRAVO');
  });
});
