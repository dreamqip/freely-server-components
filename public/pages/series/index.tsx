import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { wrapper } from '@/store';
import {
  getPopularTvShows,
  getRunningQueriesThunk,
  useGetPopularTvShowsQuery,
} from '@/services/themoviedb';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  reset,
  setPage,
  setPopularSeries,
  setTotalPages,
} from '@/features/series/popularSlice';
import { useRouter } from 'next/router';
import { useObserver } from '@/hooks/useObserver';
import SeriesList from '@/components/SeriesPage/SeriesList';
import Spinner from '@/components/Spinner';
import dynamic from 'next/dynamic';

const BackTop = dynamic(() => import('@/components/BackTop'), {
  ssr: false,
});

const Series: NextPage = () => {
  const router = useRouter();
  const { page, totalPages, series } = useAppSelector(
    (state) => state.popularSeries
  );
  const dispatch = useAppDispatch();
  const lastElement = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(true);

  const {
    data: popular,
    isLoading,
    isError,
    isFetching,
  } = useGetPopularTvShowsQuery(page);

  useObserver(lastElement, page < totalPages, isFetching, isLoading, () => {
    dispatch(setPage(page + 1));
  });

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setVisible(false);
    });
  }, [router]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && popular && !isError) {
      // make sure that there are no duplicates going into the store
      const newSeries = popular.results.filter((show) => {
        return !series.some((s) => s.id === show.id);
      });
      dispatch(setPopularSeries(newSeries));
      dispatch(setTotalPages(popular.total_pages));
    }
  }, [dispatch, isError, isLoading, popular, series]);

  return (
    <div>
      <h1 className='m-0 text-center text-6xl dark:text-white'>Series</h1>
      <SeriesList />
      {visible && <div className='h-10' ref={lastElement}></div>}
      {isFetching && <Spinner />}
      <BackTop />
    </div>
  );
};

export default Series;

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch, getState }) =>
    async () => {
      dispatch(getPopularTvShows.initiate(getState().popularSeries.page));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
