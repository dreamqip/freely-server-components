import type { MixedShow } from '@/types/search';
import type { ITvShows } from '@/types/series';
import type { IMovies } from '@/types/movies';
import { FC, Suspense } from 'react';
import Empty from '@/components/Empty';
import { SwiperSlide } from 'swiper/react';
import ShowCard from './ShowCard';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';

const Swiper = dynamic(() => import('./SwiperLazy'), {
  suspense: true,
});

interface Props {
  series: IMovies | ITvShows;
  title: string;
}

const ShowCarousel: FC<Props> = ({ series, title }) => {
  if (series && series.results.length == 0)
    return <Empty description='Sorry, but we got nothing' />;

  return (
    <div className='py-4 md:py-10'>
      <h2 className='mb-4 text-center text-4xl font-bold dark:text-white md:text-6xl'>
        {title}
      </h2>
      {series && series.results.length > 0 ? (
        <Suspense fallback={<Spinner />}>
          <Swiper>
            {series &&
              series.results.map((show: MixedShow) => {
                return (
                  <SwiperSlide key={show.id}>
                    <ShowCard show={show}></ShowCard>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Suspense>
      ) : (
        <Empty description='No shows found' />
      )}
    </div>
  );
};

export default ShowCarousel;
