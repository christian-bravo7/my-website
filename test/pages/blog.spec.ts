import { createLocalVue, mount } from '@vue/test-utils';
import Blog from '@/pages/blog.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import MockDate from 'mockdate';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('blog page', () => {
  it('should render correctly', () => {
    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should present a greeting word properly for morning', () => {
    MockDate.set('Wed Nov 25 2020 1:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const greeting = wrapper.vm.grettingWord;

    expect(greeting).toBe('Good Morning!');
  });

  it('should present a greeting word properly before noon', () => {
    MockDate.set('Wed Nov 25 2020 10:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const greeting = wrapper.vm.grettingWord;

    expect(greeting).toBe('Have a nice day!');
  });

  it('should present a greeting word properly for noon', () => {
    MockDate.set('Wed Nov 25 2020 12:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const greeting = wrapper.vm.grettingWord;

    expect(greeting).toBe('Good Noon!');
  });

  it('should present a greeting word properly for afternoon', () => {
    MockDate.set('Wed Nov 25 2020 16:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const greeting = wrapper.vm.grettingWord;

    expect(greeting).toBe('Good Afternoon!');
  });

  it('should present a greeting word properly for evening', () => {
    MockDate.set('Wed Nov 25 2020 20:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const greeting = wrapper.vm.grettingWord;

    expect(greeting).toBe('Good Evening!');
  });

  it('should present a greeting word properly for night', () => {
    MockDate.set('Wed Nov 25 2020 23:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const greeting = wrapper.vm.grettingWord;

    expect(greeting).toBe('Good Night!');
  });

  it('should return dynamic class for post index', () => {
    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    // @ts-ignore
    const dynamicClass = wrapper.vm.dynamicColors(1);

    expect(dynamicClass).toBe('hover:bg-pink-100 dark-hover:bg-pink-900');
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(Blog, {
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
      },
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('navigation.blog-label');
  });
});
