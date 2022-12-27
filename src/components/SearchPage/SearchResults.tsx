import type { MixedShow } from '@/types/search';
import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import Spinner from '../Spinner';
import ShowCard from '../ShowCarousel/ShowCard';
import dynamic from 'next/dynamic';

const Empty = dynamic(() => import('@/components/Empty'));

interface Props {
  isFetching: boolean;
}

const SearchResults: FC<Props> = ({ isFetching }) => {
  const { results: data } = useAppSelector((state) => state.search);

  if (data?.total_results === 0)
    return (
      <div className='mt-10'>
        <Empty description='No results found' />
      </div>
    );

  if (isFetching) return <Spinner />;

  return (
    <div>
      {data && (
        <div className='mt-6'>
          <div className='grid grid-cols-3 gap-6 md:grid-cols-5'>
            {data.results.map((show: MixedShow) => {
              return <ShowCard key={show.id} show={show} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
