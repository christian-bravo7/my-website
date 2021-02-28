import { MetaInfo } from 'vue-meta/types';

import { SeoContent } from '@/seo/types';

const siteUrl = 'https://christian-bravo.dev';
const siteType = 'website';
const siteTitle = 'Christian Bravo | Frontend Developer';
const siteDescription = 'Hi, I\'m Christian Bravo, Frontend developer from Guatemala specializing in web development, search engine optimization, responsive design, and custom web app solutions.';
const siteImage = '/meta-stock-image.png';

export const getMetaTags = (customSiteContent: Partial<SeoContent> = {}): MetaInfo => {
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
