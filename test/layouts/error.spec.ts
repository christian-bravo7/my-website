import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';

import Error from '@/layouts/error.vue';
import RandomFigures from '@/components/app-figures/RandomFigures.vue';

import setupI18n from '@/test/config/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};

describe('error page', () => {
  it('should render correclty', () => {
    const wrapper = mount(Error, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Nuxt: {
          template: '<div></div>',
        },
      },
      components: {
        RandomFigures,
      },
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
