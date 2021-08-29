import { mount } from '@vue/test-utils';
import AppFallbackLoad from '~/components/app/loaders/AppFallbackLoad.vue';

describe('AppFallbackLoad component', () => {
  it('should render correclty', () => {
    const wrapper = mount(AppFallbackLoad);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
