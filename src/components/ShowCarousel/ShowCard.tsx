import type { FC } from 'react';
import type { ITvShow } from '@/types/series';
import type { MixedShow } from '@/types/search';
import type { IMovie } from '@/types/movie';
import { memo } from 'react';
import Link from 'next/link';
import ShowImage from './ShowImage';
import type { ISearchPerson } from '@/types/person';

interface Props {
  show: MixedShow | ISearchPerson;
}

const ShowCard: FC<Props> = ({ show }) => {
  if ('title' in show && show.title) {
    return (
      <Link href={`/movies/${show.id}`} className='movie-card'>
        <ShowImage show={show as IMovie} />
      </Link>
    );
  }

  // Would be available only in the search page
  if (show.media_type === 'person') {
    return (
      <Link href={`/person/${show.id}`} className='movie-card'>
        <ShowImage show={show as ISearchPerson} />
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
