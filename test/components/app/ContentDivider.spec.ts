import ContentDivider from '@/components/app/ContentDivider.vue';
import { mount } from '@vue/test-utils';

describe('ContentDivider component', () => {
  it('should render correclty', () => {
    const wrapper = mount(ContentDivider);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
