import AppFallbackLoad from '@/components/app/AppFallbackLoad.vue';
import { mount } from '@vue/test-utils';

describe('AppFallbackLoad component', () => {
  it('should render correclty', () => {
    const wrapper = mount(AppFallbackLoad);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
