import type { FC } from 'react';
import { memo, Suspense, useMemo } from 'react';
import ActorMovieCard from './ActorMovieCard';
import { sortActorMoviesByPopularity } from '@/utilities/sortActorMoviesByPopularity';
import { SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';
import type { IActorCast } from '@/types/cast';

const Swiper = dynamic(() => import('@/components/ShowCarousel/SwiperLazy'), {
  suspense: true,
});

interface MoviesListProps {
  movies: IActorCast[];
  title: string;
}

const ActorMoviesList: FC<MoviesListProps> = ({ movies, title }) => {
  const sortedMovies = useMemo(() => {
    return [...movies].sort(sortActorMoviesByPopularity);
  }, [movies]);

  return (
    <div className='py-10'>
      <h2 className='text-center text-3xl font-bold dark:text-white md:text-6xl'>
        {title}
      </h2>
      <Suspense fallback={<Spinner />}>
        <Swiper>
          {sortedMovies &&
            sortedMovies.map((movie) => {
              return (
                <SwiperSlide key={movie.credit_id}>
                  <ActorMovieCard show={movie} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Suspense>
    </div>
  );
};

export default memo(ActorMoviesList);
