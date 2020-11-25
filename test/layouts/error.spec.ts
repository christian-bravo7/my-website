import Error from '@/layouts/error.vue';
import { mount } from '@vue/test-utils';

describe('error page', () => {
  it('should render correclty', () => {
    const wrapper = mount(Error, {
      mocks: {
        $t: jest.fn(msg => msg),
        localePath: jest.fn(),
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
