import { createLocalVue, mount } from '@vue/test-utils';

import AboutMeInformation from '@/components/home/information/AboutMeInformation.vue';

import setupI18n from '@/test/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('AboutMeInformation component', () => {
  it('should render correctly', () => {
    const wrapper = mount(AboutMeInformation, { ...componentConfig });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display title and description', () => {
    const wrapper = mount(AboutMeInformation, { ...componentConfig });

    const title = wrapper.find('h2');
    const descriptionText = wrapper.findAll('.about-me-information__description p');

    expect(descriptionText.at(0).text()).toBe('Hello, my name is Christian Bravo, a Frontend Developer from Guatemala with a great passion for web development using modern technologies.');
    expect(descriptionText.at(1).text()).toBe('I enjoy solving problems, creating dynamic and intuitive user interfaces, developing rich web applications and experiences.');
    expect(descriptionText.at(2).text()).toBe('Outside of the office you will find me playing soccer, collecting cactus and spending time with my pets and family.');

    expect(title.text()).toBe('About me');
  });
});
