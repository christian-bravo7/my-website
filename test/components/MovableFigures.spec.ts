import { mount } from '@vue/test-utils';

import MovableFigures from '@/components/MovableFigures.vue';

describe('MovableFigures component', () => {
  it('should render correctly', () => {
    const wrapper = mount(MovableFigures, {
      propsData: {
        currentRoute: 'about',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should set class name equals to currentRoute', () => {
    const wrapper = mount(MovableFigures, {
      propsData: {
        currentRoute: 'home',
      },
    });

    const figures = wrapper.findAll('figure.absolute');
    const figuresWithClass = figures.filter(wrapper => wrapper.classes('home'));

    expect(figures.length).toBe(figuresWithClass.length);
  });
});
