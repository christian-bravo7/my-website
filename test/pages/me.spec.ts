import { createLocalVue, mount } from '@vue/test-utils';
import Me from '@/pages/me.vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';
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
        AboutMeInformation,
        AboutMeSkills,
        AboutMeExperience,
      },
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display meta-tag title', () => {
    const wrapper = mount(Me, {
      components: {
        AboutMeInformation,
        AboutMeSkills,
        AboutMeExperience,
      },
      localVue,
    });

    const title = wrapper.vm.$meta().refresh().metaInfo.title;

    expect(title).toBe('navigation.about-me-label');
  });
});
