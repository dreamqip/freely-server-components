import type { FC, PropsWithChildren } from 'react';
import { Swiper } from 'swiper/react';
import { swiperOptions } from '@/utilities/swiperConfig';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const SwiperLazy: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper className='py-4 px-2' {...swiperOptions}>
      {children}
    </Swiper>
  );
};

export default SwiperLazy;
