import { createLocalVue, mount } from '@vue/test-utils';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';

import Blog from '@/pages/blog.vue';

import setupI18n from '@/test/i18n';

const localVue = createLocalVue();
const i18n = setupI18n(localVue);

localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

const componentConfig = {
  localVue,
  i18n,
};

describe('blog page', () => {
  it('should render correctly', () => {
    const wrapper = mount(Blog, {
      ...componentConfig,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(Blog, {
      ...componentConfig,
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('Blog');
  });
});
