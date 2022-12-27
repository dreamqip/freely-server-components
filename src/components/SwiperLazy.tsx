import type { FC, PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import { swiperOptions } from '@/utilities/swiperConfig';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const SwiperLazy: FC<PropsWithChildren> = ({ children }) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (swiperRef.current) {
      timeout = setTimeout(() => {
        swiperRef.current?.swiper.translateTo(0, 0);
      });
    }

    return () => clearTimeout(timeout);
  }, [swiperRef, children]);

  return (
    <Swiper ref={swiperRef} className='py-4 px-2' {...swiperOptions}>
      {children}
    </Swiper>
  );
};

export default SwiperLazy;
