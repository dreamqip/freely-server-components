import type { InferGetServerSidePropsType, NextPage } from 'next';
import type { IKeyword } from '@/types/movie';
import {
  getMovieById,
  getRunningQueriesThunk,
  useGetMovieByIdQuery,
} from '@/services/themoviedb';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import {
  setCredits,
  setId,
  setImages,
  setMovieDetails,
  setRecommendations,
  setReviews,
  setSimilar,
  setVideos,
} from '@/features/movie/movieSlice';
import { wrapper } from '@/store';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner';
import Hero from '@/components/MoviePage/Hero';
import dynamic from 'next/dynamic';

const Tabs = dynamic(() => import('@/components/MoviePage/Tabs'), {
  suspense: true,
});

const MoviePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(id, {
    skip: router.isFallback,
  });

  const seoOptions: NextSeoProps = {
    title: movie?.title,
    description: movie?.overview,
    additionalMetaTags: [
      {
        property: 'keywords',
        content:
          movie?.keywords.keywords
            .map((keyword: IKeyword) => keyword.name)
            .join(', ') || '',
      },
    ],
  };

  useEffect(() => {
    if (!isLoading && !isError && movie) {
      dispatch(setId(id));
      dispatch(setMovieDetails(movie));
      dispatch(setImages(movie.images));
      dispatch(setVideos(movie.videos));
      dispatch(setSimilar(movie.similar));
      dispatch(setRecommendations(movie.recommendations));
      dispatch(setReviews(movie.reviews));
      dispatch(setCredits(movie.credits));
    }
  }, [dispatch, id, isError, isLoading, movie]);

  return (
    <article className='flex flex-col'>
      <NextSeo {...seoOptions} />
      <Hero />
      <Suspense fallback={<Spinner />}>
        <Tabs />
      </Suspense>
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
