import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import Cast from '@/components/SeriesPage/Cast';
import dynamic from 'next/dynamic';

const Similar = dynamic(() => import('@/components/SeriesPage/Similar'));
const Recommended = dynamic(
  () => import('@/components/SeriesPage/Recommended')
);
const Reviews = dynamic(() => import('@/components/Reviews'));

const Overview: FC = () => {
  const { reviews } = useAppSelector((state) => state.series);

  return (
    <>
      <Cast />
      <Similar />
      <Recommended />
      {reviews && <Reviews reviews={reviews} />}
    </>
  );
};

export default Overview;
