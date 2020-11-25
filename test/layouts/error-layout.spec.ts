import ErrorLayout from '@/layouts/error-layout.vue';
import { mount } from '@vue/test-utils';

describe('error layout', () => {
  it('should render correclty', () => {
    const wrapper = mount(ErrorLayout);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
