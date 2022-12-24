import type { FC } from 'react';
import type { ITvShow } from '@/types/series';
import type { MixedShow } from '@/types/search';
import type { IMovie } from '@/types/movie';
import { memo } from 'react';
import Link from 'next/link';
import ShowImage from './ShowImage';

interface Props {
  show: MixedShow;
}

const ShowCard: FC<Props> = ({ show }) => {
  if ('title' in show && show.title) {
    return (
      <Link href={`/movies/${show.id}`} className='movie-card'>
        <ShowImage show={show as IMovie} />
      </Link>
    );
  }

  return (
    <>
      <Link href={`/series/${show.id}`} className='movie-card'>
        <ShowImage show={show as ITvShow} />
      </Link>
    </>
  );
};

export default memo(ShowCard);
