import ThemeSwitch from '@/components/app/ThemeSwitch.vue';
import { mount } from '@vue/test-utils';

describe('ThemeSwitch component', () => {
  it('should render correclty', () => {
    const wrapper = mount(ThemeSwitch, {
      mocks: {
        $colorMode: {
          value: 'dark',
          preference: '',
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
