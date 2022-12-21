export default {
  defaultTitle: 'Freely',
  description:
    'Freely offers movie details and trailers. It also includes popular movies and reviews.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://freelym.vercel.app/',
    site_name: 'Freely',
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'movie app, movie details, popular movies, upcoming movies, reviews, trailers, movie trailers, movie reviews, search movies, series, tv shows, tv series, tv shows details, tv series details, tv shows trailers, tv series trailers, tv shows reviews, tv series reviews, search tv shows, search tv series',
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
  ],
};
