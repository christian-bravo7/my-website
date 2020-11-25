import ErrorMovableFigures from '@/components/app/ErrorMovableFigures.vue';
import { mount } from '@vue/test-utils';

describe('ErrorMovableFigures component', () => {
  it('should render correclty', () => {
    const wrapper = mount(ErrorMovableFigures);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display 10 question icons', () => {
    const wrapper = mount(ErrorMovableFigures);

    const questionIcons = wrapper.findAll('figure');

    expect(questionIcons.length).toBe(10);
  });
});
