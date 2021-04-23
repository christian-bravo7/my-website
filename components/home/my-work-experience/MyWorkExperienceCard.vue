<template>
  <div>
    <MyWorkExperienceCardTitle
      :company="company"
      :job-position="jobPosition"
      :website-url="websiteUrl"
    />
    <MyWorkExperienceDate
      :start-year="startYear"
      :end-year="endYear"
    />
    <MyWorkExperienceCardDescription
      :description-paragraphs="descriptionParagraphs"
    />
    <MyWorkExperienceToolsList
      v-if="techStack"
      label="Technologies"
      :tools="techStack"
    />
    <MyWorkExperienceToolsList
      v-if="tools"
      label="Tools"
      :tools="tools"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceCard extends Vue {
  @Prop({ type: String, required: true })
  readonly jobPosition!: string;

  @Prop({ type: String, required: true })
  readonly company!: string;

  @Prop({ type: String, required: true })
  readonly websiteUrl!: string;

  @Prop({ type: Array, required: true })
  readonly startYear!: Array<number>;

  @Prop({ type: Array })
  readonly endYear!: Array<number>;

  @Prop({ type: Array })
  readonly descriptionParagraphs!: Array<string>;

  @Prop({ type: Array })
  readonly techStack!: Array<string>;

  @Prop({ type: Array })
  readonly tools!: Array<string>;
}
</script>
