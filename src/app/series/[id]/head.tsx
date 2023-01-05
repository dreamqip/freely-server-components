import DefaultTags from '@/app/DefaultTags';
import { getSeriesById } from '@/services/themoviedb';
import { use } from 'react';

export default function Head({ params }: { params: { id: string } }) {
  const series = use(getSeriesById(Number(params.id), { cache: 'no-cache' }));

  if (!series) {
    return null;
  }

  return (
    <>
      <DefaultTags />
      <title>{`${series.name} - Freely`}</title>
      <link rel='icon' href='/favicon.png' />
      <meta name='description' content={series.overview} />
      <meta property='og:title' content={series.name} />
      <meta property='og:description' content={series.overview} />
      <meta property='og:url' content='https://freelym.vercel.app/' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content={`https://image.tmdb.org/t/p/w1280${series.backdrop_path}`}
      />
      <meta property='og:image:alt' content={series.name} />
      <meta
        property='og:image:secure_url'
        content={`https://image.tmdb.org/t/p/w1280${series.backdrop_path}`}
      />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <link
        rel='canonical'
        href={`https://freely.vercel.app/seriess/${params.id}`}
      />
      <meta
        property='keywords'
        content={series.keywords?.results
          .map((keyword) => keyword.name)
          .join(', ')}
      />
    </>
  );
}
