import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import ShowCarousel from '../ShowCarousel/ShowCarousel';

const Recommended: FC = () => {
  const { recommendations } = useAppSelector((state) => state.movie);

  return (
    <div>
      {recommendations ? (
        <ShowCarousel series={recommendations} title={'Recommended'} />
      ) : null}
    </div>
  );
};

export default Recommended;
