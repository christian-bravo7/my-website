import { mount } from '@vue/test-utils';

import AppBurgerButton from '@/components/app/navigation/AppBurgerButton.vue';

describe('AppBurgerButton', () => {
  it('should render correclty', () => {
    const wrapper = mount(AppBurgerButton);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should add active class when isActive prop is provided', () => {
    const wrapper = mount(AppBurgerButton, {
      propsData: {
        isActive: true,
      },
    });

    const linesContainer = wrapper.find('.app-burger-button__wrapper');

    expect(linesContainer.classes()).toContain('app-burger-button__wrapper--active');
  });

  it('should emit onClick event when button is clicked', async () => {
    const wrapper = mount(AppBurgerButton, {
      propsData: {
        isActive: false,
      },
    });

    const button = wrapper.find('.app-burger-button');

    await button.trigger('click');

    expect(wrapper.emitted('onClick')).toBeTruthy();
  });

  it('should emit onClick event when button is focus and enter key is pressed', async () => {
    const wrapper = mount(AppBurgerButton, {
      propsData: {
        isActive: false,
      },
    });

    const button = wrapper.find('.app-burger-button');

    button.trigger('keydown.enter');

    expect(wrapper.emitted('onClick')).toBeTruthy();
  });
});
