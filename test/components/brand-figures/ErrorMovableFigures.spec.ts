import ErrorFigures from '@/components/brand-figures/ErrorFigures.vue';
import { mount } from '@vue/test-utils';

describe('ErrorFigures component', () => {
  it('should render correclty', () => {
    const wrapper = mount(ErrorFigures);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display 10 question icons', () => {
    const wrapper = mount(ErrorFigures);

    const questionIcons = wrapper.findAll('figure');

    expect(questionIcons.length).toBe(10);
  });
});
