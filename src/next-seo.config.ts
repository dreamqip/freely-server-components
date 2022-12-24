import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Freely',
  description:
    'Freely offers movies details and trailers. It also includes popular movies and reviews.',
  robotsProps: {
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'standard',
    maxVideoPreview: -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en-US',
    url: 'https://freelym.vercel.app/',
    siteName: 'Freely',
    images: [
      {
        url: 'https://freelym.vercel.app/open-graph.jpg',
        secureUrl: 'https://freelym.vercel.app/open-graph.jpg',
        type: 'image/jpeg',
        width: 1200,
        height: 630,
        alt: 'Freely',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'movies app, movies details, popular movies, upcoming movies, reviews, trailers, movies trailers, movies reviews, search movies, series, tv shows, tv series, tv shows details, tv series details, tv shows trailers, tv series trailers, tv shows reviews, tv series reviews, search tv shows, search tv series',
    },
    {
      name: 'author',
      content: 'https://github.com/dreamqip',
    },
    {
      name: 'theme-color',
      content: '#6200EE',
    },
    {
      name: 'viewport',
      content:
        'minimum-scale=1, initial-scale=1, width=device-width, height=device-height, shrink-to-fit=no, viewport-fit=cover, maximum-scale=5',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Freely',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'application-name',
      content: 'Freely',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-icon-180.png',
    },
    {
      rel: 'canonical',
      href: 'https://freelym.vercel.app/',
    },
  ],
};

export default config;
