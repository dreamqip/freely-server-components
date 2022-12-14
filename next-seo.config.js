export default {
  defaultTitle: 'Freely',
  description:
    'Freely offers movie details and trailers. It also includes popular movies and reviews.',
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'movie app, movie details, popular movies, upcoming movies',
    },
    {
      name: 'author',
      content: 'https://github.com/dreamqip',
    },
    {
      name: 'theme_color',
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
