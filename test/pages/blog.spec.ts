import { createLocalVue, mount } from '@vue/test-utils';
import Blog from '@/pages/blog.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('blog page', () => {
  it('should render correctly', () => {
    const wrapper = mount(Blog, {
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should return dynamic class for post index', () => {
    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const dynamicClass = wrapper.vm.dynamicColors(1);

    expect(dynamicClass).toBe('hover:bg-pink-100 dark-hover:bg-pink-900');
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(Blog, {
      localVue,
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('blog');
  });
});
