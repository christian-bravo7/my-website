import IndexPage from '@/pages/index.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import { createLocalVue, mount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('index page', () => {
  it('should render page correctly', () => {
    const wrapper = mount(IndexPage, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(IndexPage, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('navigation.home-label');
  });
});
