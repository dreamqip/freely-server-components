import type { FC } from 'react';
import { memo } from 'react';
import ActorMovieCard from './ActorMovieCard';
import { sortActorMoviesByPopularity } from '@/utilities/sortActorMoviesByPopularity';
import { SwiperSlide } from 'swiper/react';
import type { IActorCast } from '@/types/cast';
import SwiperLazy from '@/components/SwiperLazy';
import Empty from '@/components/Empty';

interface MoviesListProps {
  movies: IActorCast[];
  title: string;
}

const ActorMoviesList: FC<MoviesListProps> = ({ movies, title }) => {
  const sortedMovies = [...movies].sort(sortActorMoviesByPopularity);

  return (
    <div className='py-10'>
      <h2 className='text-center text-3xl font-bold dark:text-white md:text-6xl'>
        {title}
      </h2>
      <SwiperLazy>
        {sortedMovies && sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.credit_id}>
                <ActorMovieCard show={movie} />
              </SwiperSlide>
            );
          })
        ) : (
          <Empty description='No shows found' />
        )}
      </SwiperLazy>
    </div>
  );
};

export default memo(ActorMoviesList);
