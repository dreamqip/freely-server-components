import type { InferGetServerSidePropsType, NextPage } from 'next';
import type { IKeyword } from '@/types/movie';
import { wrapper } from '@/store';
import {
  getRunningQueriesThunk,
  getTvShowById,
  useGetTvShowByIdQuery,
} from '@/services/themoviedb';
import Hero from '@/components/SeriesPage/Hero';
import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import {
  setSeries,
  setSeriesCredits,
  setSeriesId,
  setSeriesImages,
  setSeriesRecommendations,
  setSeriesReviews,
  setSeriesSimilar,
  setSeriesVideos,
} from '@/features/series/seriesSlice';
import { NextSeo, NextSeoProps } from 'next-seo';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/router';

const Tabs = dynamic(() => import('@/components/SeriesPage/Tabs'), {
  suspense: true,
});

const TvShow: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    data: series,
    isLoading,
    isError,
  } = useGetTvShowByIdQuery(id, {
    skip: router.isFallback,
  });

  const seoOptions: NextSeoProps = {
    title: series?.name,
    description: series?.overview,
    additionalMetaTags: [
      {
        property: 'keywords',
        content:
          series?.keywords.results
            .map((keyword: IKeyword) => keyword.name)
            .join(', ') || '',
      },
    ],
  };

  useEffect(() => {
    if (!isLoading && !isError && series) {
      dispatch(setSeries(series));
      dispatch(setSeriesId(id));
      dispatch(setSeriesImages(series.images));
      dispatch(setSeriesVideos(series.videos));
      dispatch(setSeriesSimilar(series.similar));
      dispatch(setSeriesRecommendations(series.recommendations));
      dispatch(setSeriesReviews(series.reviews));
      dispatch(setSeriesCredits(series.credits));
    }
  }, [isLoading, dispatch, series, id, isError]);

  return (
    <article>
      <NextSeo {...seoOptions} />
      <Hero />
      <Suspense fallback={<Spinner />}>
        <Tabs />
      </Suspense>
    </article>
  );
};

// @ts-ignore
TvShow.theme = 'dark';

export default TvShow;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async (ctx) => {
      const { id } = ctx.query;
      const parsedId = parseInt(id as string, 10);

      dispatch(getTvShowById.initiate(parsedId));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {
          id: parsedId,
        },
      };
    }
);
