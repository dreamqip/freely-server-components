import DefaultTags from '@/app/DefaultTags';

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>Freely</title>
      <meta
        name='description'
        content='Welcome to Freely, the ultimate destination for movie and series enthusiasts! Here, you can find detailed information about your favorite films and TV shows, including plot summaries, cast lists, and trailer links. You can also watch trailers and learn more about your favorite actors. So whether you&#x27;re a casual viewer or a die-hard fan, our website has something for everyone. Come visit us and discover the magic of movies and series!'
      />
      <meta property='og:title' content='Freely' />
      <meta
        property='og:description'
        content='Welcome to Freely, the ultimate destination for movie and series enthusiasts! Here, you can find detailed information about your favorite films and TV shows, including plot summaries, cast lists, and trailer links. You can also watch trailers and learn more about your favorite actors. So whether you&#x27;re a casual viewer or a die-hard fan, our website has something for everyone. Come visit us and discover the magic of movies and series!'
      />
      <meta property='og:url' content='https://freelym.vercel.app/' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://freelym.vercel.app/open-graph.jpg'
      />
      <meta property='og:image:alt' content='Freely' />
      <meta
        property='og:image:secure_url'
        content='https://freelym.vercel.app/open-graph.jpg'
      />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content='en-US' />
      <meta property='og:site_name' content='Freely' />
      <link rel='canonical' href='https://freely.vercel.app/' />
      <meta
        property='keywords'
        content='movies app, movies details, movie details, popular movies, upcoming movies, reviews, trailers, movies trailers, movies reviews, search movies, series, tv shows, tv series, tv shows details, tv series details, tv shows trailers, tv series trailers, tv shows reviews, tv series reviews, search tv shows, search tv series, cast lists, trailer links, watch trailers, learn more about your favorite actors, casual viewer, die-hard fan, magic of movies and series'
      />
    </>
  );
}
