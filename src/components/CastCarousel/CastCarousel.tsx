import type { IMovieCredits, ITvShowCredits } from '@/types/credits';
import type { FC } from 'react';
import CastCard from './CastCard';
import { SwiperSlide } from 'swiper/react';
import SwiperLazy from '@/components/SwiperLazy';
import dynamic from 'next/dynamic';

const Empty = dynamic(() => import('@/components/Empty'));

interface CastListProps {
  credits: ITvShowCredits | IMovieCredits;
  title: string;
}

const CastCarousel: FC<CastListProps> = ({ credits, title }) => {
  return (
    <div className='relative'>
      <h2 className='mb-4 text-center text-3xl font-semibold dark:text-white md:text-4xl'>
        {title}
      </h2>
      {credits.cast.length > 0 ? (
        <SwiperLazy>
          {credits &&
            credits.cast.map((person) => {
              // check if array have person who performed two roles in the movies
              // and if there is, then we will not show him in the cast list
              // because it will be a duplicate
              const isDuplicate = credits.cast.some(
                (item) =>
                  item.name === person.name &&
                  item.character !== person.character
              );
              if (!isDuplicate) {
                return (
                  <SwiperSlide key={person.id}>
                    <CastCard person={person} />
                  </SwiperSlide>
                );
              }
            })}
        </SwiperLazy>
      ) : (
        <Empty description='No cast found' />
      )}
    </div>
  );
};

export default CastCarousel;
