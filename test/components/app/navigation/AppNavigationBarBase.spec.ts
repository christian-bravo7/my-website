import { mount } from '@vue/test-utils';

import AppNavigationBarBase from '@/components/app/navigation/AppNavigationBarBase.vue';

describe('AppNavigationBarBase', () => {
  it('should render correclty', () => {
    const wrapper = mount(AppNavigationBarBase);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render content into left slot', () => {
    const wrapper = mount(AppNavigationBarBase, {
      slots: {
        left: 'hello left slot',
      },
    });

    const navbarContent = wrapper.findAll('.navbar__content div');

    const leftSection = navbarContent.at(0);
    const centerSection = navbarContent.at(1);
    const rightSection = navbarContent.at(2);

    expect(leftSection.text()).toBe('hello left slot');
    expect(centerSection.element).toBeEmptyDOMElement();
    expect(rightSection.element).toBeEmptyDOMElement();
  });

  it('should render content into center slot', () => {
    const wrapper = mount(AppNavigationBarBase, {
      slots: {
        center: 'hello center slot',
      },
    });

    const navbarContent = wrapper.findAll('.navbar__content div');

    const leftSection = navbarContent.at(0);
    const centerSection = navbarContent.at(1);
    const rightSection = navbarContent.at(2);

    expect(leftSection.element).toBeEmptyDOMElement();
    expect(centerSection.text()).toBe('hello center slot');
    expect(rightSection.element).toBeEmptyDOMElement();
  });

  it('should render content into right slot', () => {
    const wrapper = mount(AppNavigationBarBase, {
      slots: {
        right: 'hello right slot',
      },
    });

    const navbarContent = wrapper.findAll('.navbar__content div');

    const leftSection = navbarContent.at(0);
    const centerSection = navbarContent.at(1);
    const rightSection = navbarContent.at(2);

    expect(leftSection.element).toBeEmptyDOMElement();
    expect(centerSection.element).toBeEmptyDOMElement();
    expect(rightSection.text()).toBe('hello right slot');
  });

  it('should not render content in slots', () => {
    const wrapper = mount(AppNavigationBarBase);

    const navbarContent = wrapper.findAll('.navbar__content div');

    const leftSection = navbarContent.at(0);
    const centerSection = navbarContent.at(1);
    const rightSection = navbarContent.at(2);

    expect(leftSection.element).toBeEmptyDOMElement();
    expect(centerSection.element).toBeEmptyDOMElement();
    expect(rightSection.element).toBeEmptyDOMElement();
  });

  it('should render content in slots', () => {
    const wrapper = mount(AppNavigationBarBase, {
      slots: {
        left: 'left content',
        center: 'center content',
        right: 'right content',
      },
    });

    const navbarContent = wrapper.findAll('.navbar__content div');

    const leftSection = navbarContent.at(0);
    const centerSection = navbarContent.at(1);
    const rightSection = navbarContent.at(2);

    expect(leftSection.element).not.toBeEmptyDOMElement();
    expect(centerSection.element).not.toBeEmptyDOMElement();
    expect(rightSection.element).not.toBeEmptyDOMElement();
  });
});
