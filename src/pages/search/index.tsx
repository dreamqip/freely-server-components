import type { NextPage } from 'next';
import { useLazySearchMoviesQuery } from '@/services/themoviedb';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { setSearchResults } from '@/features/search/searchSlice';
import SearchInput from '@/components/SearchPage/SearchInput';
import SearchResults from '@/components/SearchPage/SearchResults';

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
    <div className='h-full'>
      <SearchInput trigger={trigger} />
      {data && query ? (
        <div>
          <SearchResults isFetching={isFetching} />
        </div>
      ) : (
        <h1 className='mt-10 text-center text-5xl font-medium text-black dark:text-white'>
          Start typing to search
        </h1>
      )}
    </div>
  );
};

export default Search;
