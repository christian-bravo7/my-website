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
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should present a greeting word properly for morning', () => {
    MockDate.set('Wed Nov 25 2020 1:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const greeting = wrapper.vm.greetingWord;

    expect(greeting).toBe('good-morning');
  });

  it('should present a greeting word properly before noon', () => {
    MockDate.set('Wed Nov 25 2020 10:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const greeting = wrapper.vm.greetingWord;

    expect(greeting).toBe('good-morning');
  });

  it('should present a greeting word properly for noon', () => {
    MockDate.set('Wed Nov 25 2020 12:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const greeting = wrapper.vm.greetingWord;

    expect(greeting).toBe('good-noon');
  });

  it('should present a greeting word properly for afternoon', () => {
    MockDate.set('Wed Nov 25 2020 16:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const greeting = wrapper.vm.greetingWord;

    expect(greeting).toBe('good-afternoon');
  });

  it('should present a greeting word properly for evening', () => {
    MockDate.set('Wed Nov 25 2020 20:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const greeting = wrapper.vm.greetingWord;

    expect(greeting).toBe('good-evening');
  });

  it('should present a greeting word properly for night', () => {
    MockDate.set('Wed Nov 25 2020 23:00:00 GMT-0600 (Central Standard Time)');

    const wrapper = mount(Blog, {
      localVue,
    });

    // @ts-ignore
    const greeting = wrapper.vm.greetingWord;

    expect(greeting).toBe('good-evening');
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

    expect(title).toBe('navigation.blog-label');
  });
});
