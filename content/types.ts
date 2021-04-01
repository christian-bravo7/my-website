import { IContentDocument } from '@nuxt/content/types/content';

export interface PostContent extends IContentDocument {
  title: string;
  description: string;
  image: string;
  minutes: number;
  date: Array<number>;
}
