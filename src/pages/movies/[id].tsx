import type { InferGetServerSidePropsType, NextPage } from 'next';
import type { IKeyword } from '@/types/movie';
import {
  getMovieById,
  getRunningQueriesThunk,
  useGetMovieByIdQuery,
} from '@/services/themoviedb';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import {
  setCredits,
  setImages,
  setRecommendations,
  setSimilar,
  setVideos,
  setReviews,
} from '@/features/movie/movieSlice';
import { wrapper } from '@/store';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner';
import Hero from '@/components/MoviePage/Hero';
import dynamic from 'next/dynamic';
import Storyline from '@/components/Storyline';

const Tabs = dynamic(() => import('@/components/MoviePage/Tabs'), {
  ssr: false,
});

const MoviePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: movie } = useGetMovieByIdQuery(id, {
    skip: router.isFallback,
  });

  const seoOptions: NextSeoProps = {
    title: movie?.title,
    description: movie?.overview,
    openGraph: {
      title: movie?.title,
      description: movie?.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`,
          width: 1280,
          height: 720,
          alt: movie?.title,
        },
      ],
    },
    additionalMetaTags: [
      {
        property: 'keywords',
        content:
          movie?.keywords.keywords
            .map((keyword: IKeyword) => keyword.name)
            .join(', ') || '',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'canonical',
        href: `https://www.themoviedb.org/movie/${movie?.id}`,
      },
    ],
  };

  useEffect(() => {
    if (movie && !router.isFallback) {
      dispatch(setReviews(movie.reviews));
      dispatch(setImages(movie.images));
      dispatch(setVideos(movie.videos));
      dispatch(setSimilar(movie.similar));
      dispatch(setRecommendations(movie.recommendations));
      dispatch(setCredits(movie.credits));
    }
  }, [dispatch, id, movie, router.isFallback]);

  return (
    <article className='flex flex-col'>
      <NextSeo {...seoOptions} />
      {movie ? (
        <>
          <Hero movie={movie} />
          <Storyline series={movie} />
          <Tabs />
        </>
      ) : (
        <Spinner />
      )}
    </article>
  );
};

// @ts-ignore
MoviePage.theme = 'dark';

export default MoviePage;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async (ctx) => {
      const { id } = ctx.query;
      const parsedId = parseInt(id as string, 10);

      dispatch(getMovieById.initiate(parsedId));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {
          id: parsedId,
        },
      };
    }
);
