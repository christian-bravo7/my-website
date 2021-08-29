import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import { createLocalVue, mount } from '@vue/test-utils';

import IndexPage from '@/pages/index.vue';

import setupI18n from '@/test/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

const componentConfig = {
  localVue,
  i18n,
};
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('index page', () => {
  it('should render page correctly', () => {
    const wrapper = mount(IndexPage, {
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(IndexPage, {
      ...componentConfig,
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('Home');
  });
});
