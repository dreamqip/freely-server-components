import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/IndexPage/Hero';
import Explore from '@/components/IndexPage/Explore';
import Watch from '@/components/IndexPage/Watch';
import { wrapper } from '@/store';
import {
  getNowPlayingMovies,
  getPopularTvShows,
  getRunningQueriesThunk,
  getTopRatedMovies,
  getTopRatedSeries,
  useGetNowPlayingMoviesQuery,
  useGetPopularTvShowsQuery,
  useGetTopRatedMoviesQuery,
  useGetTopRatedSeriesQuery,
} from '@/services/themoviedb';
import Spinner from '@/components/Spinner';

const ShowCarousel = dynamic(
  () => import('@/components/ShowCarousel/ShowCarousel'),
  {
    loading: () => <Spinner />,
  }
);

const Home: NextPage = () => {
  const { data: topRated } = useGetTopRatedMoviesQuery(1);
  const { data: nowPlaying } = useGetNowPlayingMoviesQuery(1);
  const { data: popularSeries } = useGetPopularTvShowsQuery(1);
  const { data: topRatedSeries } = useGetTopRatedSeriesQuery(1);

  return (
    <>
      <Hero />
      <Explore />
      <Watch />
      {topRated && nowPlaying && popularSeries && topRatedSeries ? (
        <>
          <ShowCarousel title='Latest Series' series={popularSeries} />
          <ShowCarousel title='Now In Theaters' series={nowPlaying} />
          <ShowCarousel title='Top Rated Series' series={topRatedSeries} />
          <ShowCarousel title='Top Rated' series={topRated} />
        </>
      ) : null}
    </>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async () => {
      dispatch(getTopRatedMovies.initiate(1));
      dispatch(getNowPlayingMovies.initiate(1));
      dispatch(getPopularTvShows.initiate(1));
      dispatch(getTopRatedSeries.initiate(1));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
