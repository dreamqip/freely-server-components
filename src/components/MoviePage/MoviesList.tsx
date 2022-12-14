import type { FC } from 'react';
import type { IMovie } from '@/types/movie';
import ShowCard from '@/components/ShowCarousel/ShowCard';
import { useAppSelector } from '@/hooks/redux';

const MoviesList: FC = () => {
  const { movies } = useAppSelector((state) => state.popularMovies);

  return (
    <>
      {movies && movies.length > 0 && (
        <div className='mt-6'>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            {movies.map((show: IMovie) => {
              return <ShowCard key={show.id} show={show} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesList;
