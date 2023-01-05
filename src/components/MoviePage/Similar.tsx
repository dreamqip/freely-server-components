'use client';

import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import ShowCarousel from '../ShowCarousel/ShowCarousel';

const Similar: FC = () => {
  const { similar } = useAppSelector((state) => state.movie);

  return (
    <>{similar ? <ShowCarousel series={similar} title={'Similar'} /> : null}</>
  );
};

export default Similar;
