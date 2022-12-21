import type { MixedShow } from '@/types/search';
import type { ITvShows } from '@/types/series';
import type { IMovies } from '@/types/movies';
import type { FC } from 'react';
import Empty from '@/components/Empty';
import { SwiperSlide } from 'swiper/react';
import ShowCard from './ShowCard';
import SwiperLazy from '@/components/SwiperLazy';

interface Props {
  series: IMovies | ITvShows;
  title: string;
}

const ShowCarousel: FC<Props> = ({ series, title }) => {
  return (
    <div className='py-4 md:py-10'>
      <h2 className='mb-4 text-center text-3xl font-semibold dark:text-white md:text-4xl'>
        {title}
      </h2>
      {series && series.results.length > 0 ? (
        <SwiperLazy>
          {series.results.map((show: MixedShow) => {
            return (
              <SwiperSlide key={show.id}>
                <ShowCard show={show}></ShowCard>
              </SwiperSlide>
            );
          })}
        </SwiperLazy>
      ) : (
        <Empty description={`No ${title.toLowerCase()} shows found`} />
      )}
    </div>
  );
};

export default ShowCarousel;
