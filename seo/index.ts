import { MetaInfo } from 'vue-meta/types';

import { SeoContent } from '@/seo/types';

const siteUrl = 'https://christian-bravo.dev';
const siteType = 'website';
const siteTitle = 'Christian Bravo | Frontend Developer';
const siteDescription = 'I am la mera versh';
const siteImage = 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png0';

export default (customSiteContent: Partial<SeoContent> = {}): MetaInfo => {
  const siteContent: SeoContent = {
    siteUrl,
    siteType,
    siteTitle,
    siteDescription,
    siteImage,
    ...customSiteContent,
  };

  return {
    title: siteContent.siteTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: siteContent.siteDescription,
      },
      // Open Graph / Facebook
      {
        hid: 'og:type',
        property: 'og:type',
        content: siteContent.siteType,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: siteContent.siteUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteContent.siteTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteContent.siteDescription,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: siteContent.siteImage,
      },
      // Twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: siteContent.siteUrl,
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: siteContent.siteTitle,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: siteContent.siteDescription,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: siteContent.siteImage,
      },
    ],
  };
};
