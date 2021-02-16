import { createLocalVue, mount } from '@vue/test-utils';
import Me from '@/pages/me.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
import ContentDivider from '@/components/app/ContentDivider.vue';
import AboutMeInformation from '@/components/about-me/information/AboutMeInformation.vue';
import AboutMeExperience from '@/components/about-me/experience/AboutMeExperience.vue';
import AboutMeExperienceCard from '@/components/about-me/experience/AboutMeExperienceCard.vue';
import AboutMeSkills from '@/components/about-me/skills/AboutMeSkills.vue';
import SkillIcon from '@/components/about-me/skills/SkillIcon.vue';

const localVue = createLocalVue();
localVue.use(PortalVue);
localVue.use(VueMeta, { keyName: 'head' });

describe('me page', () => {
  it('should render correctly', () => {
    // @ts-ignore
    AboutMeSkills.options.components.SkillIcon = SkillIcon;
    // @ts-ignore
    AboutMeExperience.options.components.AboutMeExperienceCard = AboutMeExperienceCard;

    const wrapper = mount(Me, {
      components: {
        ContentDivider,
        AboutMeInformation,
        AboutMeSkills,
        AboutMeExperience,
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
        AboutMeExperience,
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
