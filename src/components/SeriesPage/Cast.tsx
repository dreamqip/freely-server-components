import type { FC } from 'react';
import CastCarousel from '../CastCarousel/CastCarousel';
import { useAppSelector } from '@/hooks/redux';

const Cast: FC = () => {
  const { credits } = useAppSelector((state) => state.series);

  return (
    <div>
      {credits ? <CastCarousel credits={credits} title={'Cast'} /> : null}
    </div>
  );
};

export default Cast;
