import type { NextPage } from 'next';
import { useLazySearchMoviesQuery } from '@/services/themoviedb';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { setSearchResults } from '@/features/search/searchSlice';
import SearchInput from '@/components/SearchPage/SearchInput';
import dynamic from 'next/dynamic';

const BackTop = dynamic(() => import('@/components/BackTop'), { ssr: false });
const SearchResults = dynamic(
  () => import('@/components/SearchPage/SearchResults'),
  { ssr: false }
);

const Search: NextPage = () => {
  const { query } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const [trigger, { data, isFetching }] = useLazySearchMoviesQuery();

  useEffect(() => {
    if (data && !isFetching) {
      dispatch(setSearchResults(data));
    }
  }, [isFetching, data, dispatch]);

  return (
    <div className='relative h-full pt-6'>
      <SearchInput trigger={trigger} />
      {data && query ? (
        <div>
          <SearchResults isFetching={isFetching} />
        </div>
      ) : (
        <h1 className='mt-10 text-center text-3xl font-medium text-black dark:text-white md:text-5xl'>
          Start typing to search
        </h1>
      )}
      <BackTop />
    </div>
  );
};

export default Search;
