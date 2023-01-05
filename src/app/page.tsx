import Hero from '@/components/Home/Hero';
import Explore from '@/components/Home/Explore';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';
import {
  getPopularSeries,
  getTopRatedMovies,
  revalidate,
} from '@/services/themoviedb';

const Watch = dynamic(() => import('@/components/Home/Watch'));

const ShowCarousel = dynamic(
  () => import('@/components/ShowCarousel/ShowCarousel'),
  {
    loading: () => <Spinner />,
  }
);

export default async function Page() {
  const topRated = await getTopRatedMovies(1, { next: { revalidate } });
  const popularSeries = await getPopularSeries(1, { next: { revalidate } });

  return (
    <>
      <Hero />
      <Explore />
      <Watch />
      <ShowCarousel title='Top Rated' series={topRated} />
      <ShowCarousel title='Popular Series' series={popularSeries} />
    </>
  );
}
