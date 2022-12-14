import type { ITvShow } from '@/types/series';
import { useAppSelector } from '@/hooks/redux';
import ShowCard from '@/components/ShowCarousel/ShowCard';

const SeriesList = () => {
  const { series } = useAppSelector((state) => state.popularSeries);

  return (
    <>
      {series && series.length > 0 && (
        <div className='mt-6'>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            {series.map((show: ITvShow) => {
              return <ShowCard key={show.id} show={show} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SeriesList;
