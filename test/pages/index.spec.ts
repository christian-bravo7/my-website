import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import { createLocalVue, mount } from '@vue/test-utils';

import IndexPage from '@/pages/index.vue';
import RecentProjects from '@/components/home/recent-projects/RecentProjects.vue';
import RecentProjectAdvice from '@/components/home/recent-projects/RecentProjectAdvice.vue';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('index page', () => {
  it('should render page correctly', () => {
    // @ts-ignore
    RecentProjects.options.components.RecentProjectAdvice = RecentProjectAdvice;

    const wrapper = mount(IndexPage, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
      components: {
        RecentProjects,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    // @ts-ignore
    RecentProjects.options.components.RecentProjectAdvice = RecentProjectAdvice;

    const wrapper = mount(IndexPage, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
      components: {
        RecentProjects,
      },
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('navigation.home-label');
  });
});
