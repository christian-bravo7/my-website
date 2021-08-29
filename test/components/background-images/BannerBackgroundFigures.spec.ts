import { mount } from '@vue/test-utils';

import BannerBackgroundFigures from '@/components/background-figures/BannerBackgroundFigures.vue';

describe('BannerBackgroundFigures component', () => {
  it('should render correctly', () => {
    const wrapper = mount(BannerBackgroundFigures, {
      propsData: {
        currentRoute: 'about',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should set class name equals to currentRoute', () => {
    const wrapper = mount(BannerBackgroundFigures, {
      propsData: {
        currentRoute: 'home',
      },
    });

    const figures = wrapper.findAll('figure.absolute');
    const figuresWithClass = figures.filter(wrapper => wrapper.classes('home'));

    expect(figures.length).toBe(figuresWithClass.length);
  });
});
