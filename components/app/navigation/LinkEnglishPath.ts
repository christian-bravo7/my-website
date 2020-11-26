import { Vue, Component, Prop } from 'nuxt-property-decorator';

import { RawLocation } from 'vue-router/types';

@Component
export default class LinkEnglishPath extends Vue {
  @Prop({ type: String, required: true })
  path!: string;

  @Prop({ type: Boolean, default: false })
  isOnlyEnglish!: boolean;

  get linkPath (): Array<RawLocation | string> {
    const path: RawLocation = { name: this.path };

    if (this.isOnlyEnglish) {
      return [path, 'en'];
    }

    return [path];
  }
}
