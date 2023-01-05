import { getMovieById } from '@/services/themoviedb';
import DefaultTags from '@/app/DefaultTags';

export default async function Head({ params }: { params: { id: string } }) {
  const movie = await getMovieById(Number(params.id), { cache: 'no-cache' });

  if (!movie) {
    return null;
  }

  return (
    <>
      <DefaultTags />
      <title>{`${movie.title} - Freely`}</title>
      <link rel='icon' href='/favicon.png' />
      <meta name='description' content={movie.overview} />
      <meta property='og:title' content={movie.title} />
      <meta property='og:description' content={movie.overview} />
      <meta property='og:url' content='https://freelym.vercel.app/' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
      />
      <meta property='og:image:alt' content={movie.title} />
      <meta
        property='og:image:secure_url'
        content={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
      />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <link
        rel='canonical'
        href={`https://freely.vercel.app/movies/${params.id}`}
      />
      <meta
        property='keywords'
        content={movie.keywords?.keywords
          .map((keyword) => keyword.name)
          .join(', ')}
      />
    </>
  );
}
