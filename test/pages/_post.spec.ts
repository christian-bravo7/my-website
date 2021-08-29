import Post from '@/pages/_post.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import { createLocalVue, mount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('single post page', () => {
  it('should render page correctly', () => {
    const wrapper = mount(Post, {
      localVue,
      mocks: {
        $route: {
          path: 'localhost',
        },
      },
      data: () => ({
        article: {
          Post: 'hello-world',
          title: 'Hello world',
          description: 'Welcome to my first post of the many that I hope to share us ❤️',
          minutes: 2,
          image: 'https://images.pexels.com/photos/2646531/pexels-photo-2646531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: [2020, 10, 24],
        },
      }),
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(Post, {
      localVue,
      mocks: {
        $route: {
          path: 'localhost',
        },
      },
      data: () => ({
        article: {
          Post: 'hello-world',
          title: 'Hello world',
          description: 'Welcome to my first post of the many that I hope to share us ❤️',
          minutes: 2,
          image: 'https://images.pexels.com/photos/2646531/pexels-photo-2646531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: [2020, 10, 24],
        },
      }),
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('Hello world');
  });
});
