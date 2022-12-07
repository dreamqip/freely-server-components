import type { InferGetServerSidePropsType, NextPage } from 'next';
import { wrapper } from '../../store';
import {
  getRunningQueriesThunk,
  getTvShowById,
  useGetTvShowByIdQuery,
} from '@/services/themoviedb';
import Hero from '@/components/SeriesPage/Hero';
import dynamic from 'next/dynamic';
import { useEffect, Suspense, useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import {
  setSeries,
  setSeriesCast,
  setSeriesId,
  setSeriesImages,
  setSeriesRecommendations,
  setSeriesReviews,
  setSeriesSimilar,
  setSeriesVideos,
} from '@/features/series/seriesSlice';
import { NextSeo } from 'next-seo';
import { IKeyword } from '@/types/movie';
import Spinner from '@/components/Spinner';

const Tabs = dynamic(() => import('@/components/SeriesPage/Tabs'), {
  suspense: true,
  ssr: false,
});

const TvShow: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { data: series, isLoading, isError } = useGetTvShowByIdQuery(id);
  const [keywords, setKeywords] = useState<string[]>([]);

  const seoOptions: any = {
    title: series?.name,
    description: series?.overview,
    additionalMetaTags: [
      {
        property: 'keywords',
        content: keywords?.join(', '),
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
      dispatch(setSeriesCast(series.credits));
      setKeywords(
        series.keywords.results.map((keyword: IKeyword) => keyword.name)
      );
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
  (store) => async (ctx) => {
    const { id } = ctx.query;
    const parsedId = parseInt(id as string, 10);

    if (parsedId) {
      await store.dispatch(getTvShowById.initiate(parsedId));
    }

    await Promise.all(dispatch(getRunningQueriesThunk()));

    return {
      props: {
        id: parsedId,
      },
    };
  }
);
