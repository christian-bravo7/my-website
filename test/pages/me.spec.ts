import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Me from '@/pages/me.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import ContentDivider from '@/components/app/ContentDivider.vue';
import AboutMeInformation from '@/components/about-me/AboutMeInformation.vue';
import AboutMeSkills from '@/components/about-me/AboutMeSkills.vue';
import SkillIcon from '@/components/about-me/SkillIcon.vue';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('me page', () => {
  it('should render correctly', () => {
    const aboutMeSkills = AboutMeSkills;

    // @ts-ignore
    aboutMeSkills.options.components.SkillIcon = SkillIcon;

    const wrapper = mount(Me, {
      components: {
        ContentDivider,
        AboutMeInformation,
        AboutMeSkills,
      },
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
        $scrollreveal: {
          reveal: jest.fn(() => {}),
          sync: jest.fn(() => {}),
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(Me, {
      components: {
        ContentDivider,
        AboutMeInformation,
        AboutMeSkills,
      },
      localVue,
      mocks: {
        $t: jest.fn(msg => msg),
        $scrollreveal: {
          reveal: jest.fn(() => {}),
          sync: jest.fn(() => {}),
        },
      },
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('navigation.about-me-label');
  });
});
