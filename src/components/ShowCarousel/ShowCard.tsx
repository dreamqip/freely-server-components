import type { FC } from 'react';
import { memo } from 'react';
import Link from 'next/link';
import { MixedShow } from '@/types/search';
import { IMovie } from '@/types/movie';
import ShowImage from './ShowImage';
import { ITvShow } from '@/types/series';

interface Props {
  show: MixedShow;
}

const ShowCard: FC<Props> = ({ show }) => {
  if ('title' in show && show.title) {
    return (
      <Link href={`/movie/${show.id}`} className='movie-card'>
        <div className='rounded-md'>
          <ShowImage show={show as IMovie} />
        </div>
      </Link>
    );
  }

  return (
    <>
      <Link href={`/series/${show.id}`} className='movie-card'>
        <div className='rounded-md'>
          <ShowImage show={show as ITvShow} />
        </div>
      </Link>
    </>
  );
};

export default memo(ShowCard);
