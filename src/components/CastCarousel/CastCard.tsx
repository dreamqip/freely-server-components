import type { FC } from 'react';
import type { IMovieCast } from '@/types/cast';
import Link from 'next/link';
import CastImage from './CastImage';

interface Props {
  person: IMovieCast;
}

const CastCard: FC<Props> = ({ person }) => {
  return (
    <Link
      href={`/actor/${person.id}`}
      className='flex cursor-pointer flex-col justify-center transition-all duration-300 ease-in-out hover:scale-105'
    >
      <span className='flex'>
        <CastImage path={person} />
      </span>
      <div className='text-lg text-black dark:text-white'>{person.name}</div>
      <div className='text-md text-gray-500'>
        {person?.character?.length > 35
          ? person.character.substring(0, 35) + '...'
          : person.character}
      </div>
    </Link>
  );
};

export default CastCard;
