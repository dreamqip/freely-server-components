import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import ShowCarousel from '../ShowCarousel/ShowCarousel';

const Similar: FC = () => {
  const { similar } = useAppSelector((state) => state.movie);

  return (
    <div>
      {similar ? <ShowCarousel series={similar} title={'Similar'} /> : null}
    </div>
  );
};

export default Similar;
