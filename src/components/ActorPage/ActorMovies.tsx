import type { FC } from 'react';
import ActorMoviesList from './ActorMoviesList';
import type { IActorCast } from '@/types/cast';

interface Props {
  movies: IActorCast[];
}

const ActorMovies: FC<Props> = ({ movies }) => {
  return (
    <div>
      <ActorMoviesList movies={movies} title='Known for' />
    </div>
  );
};

export default ActorMovies;
