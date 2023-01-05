import type { NextPage } from 'next';
import { wrapper } from '@/store';
import {
  getPopularMovies,
  getRunningQueriesThunk,
  useGetPopularMoviesQuery,
} from '@/services/themoviedb';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect, useRef, useState } from 'react';
import { useObserver } from '@/hooks/useObserver';
import {
  reset,
  setPage,
  setPopularMovies,
  setTotalPages,
} from '@/features/movie/popularSlice';
import MoviesList from '@/components/MoviePage/MoviesList';
import Spinner from '@/components/Spinner';
import dynamic from 'next/dynamic';

const BackTop = dynamic(() => import('@/components/BackTop'), {
  ssr: false,
});

const Movies: NextPage = () => {
  const router = useRouter();
  const {
    page,
    totalPages,
    movies: popularMovies,
  } = useAppSelector((state) => state.popularMovies);
  const dispatch = useAppDispatch();
  const lastElement = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(true);

  const {
    data: movies,
    isLoading,
    isError,
    isFetching,
  } = useGetPopularMoviesQuery(page, { skip: router.isFallback });

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
    if (!isLoading && movies && !isError) {
      // make sure that there are no duplicates going into the store
      const newMovies = movies.results.filter(
        (movie) => !popularMovies.find((m) => m.id === movie.id)
      );
      dispatch(setPopularMovies(newMovies));
      dispatch(setTotalPages(movies.total_pages));
    }
  }, [dispatch, isError, isLoading, movies, popularMovies]);

  return (
    <div>
      <h1 className='m-0 text-center text-6xl dark:text-white'>Movies</h1>
      <MoviesList />
      {visible && <div className='h-10' ref={lastElement}></div>}
      {isFetching && <Spinner />}
      <BackTop />
    </div>
  );
};

export default Movies;

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch, getState }) =>
    async () => {
      dispatch(getPopularMovies.initiate(getState().popularMovies.page));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
