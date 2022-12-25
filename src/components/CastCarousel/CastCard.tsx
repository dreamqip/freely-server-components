import type { FC } from 'react';
import type { IMovieCast, ITvShowCast } from '@/types/cast';
import Link from 'next/link';
import CastImage from './CastImage';

interface Props {
  person: ITvShowCast | IMovieCast;
}

const CastCard: FC<Props> = ({ person }) => {
  return (
    <Link
      href={`/person/${person.id}`}
      className='flex h-full cursor-pointer flex-col transition-all duration-300 ease-in-out hover:scale-105'
    >
      <>
        <CastImage path={person} />
        <div className='text-md my-1 text-black dark:text-white'>
          {person.name}
        </div>
        <div className='truncate text-sm text-primary-dark'>
          {person.character}
        </div>
      </>
    </Link>
  );
};

export default CastCard;
