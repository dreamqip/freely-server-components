import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import SearchResults from '@/components/SearchPage/SearchResults';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  getRunningQueriesThunk,
  searchMovies,
  useSearchMoviesQuery,
} from '@/services/themoviedb';
import { useEffect } from 'react';
import { setSearchResults } from '@/features/search/searchSlice';
import { wrapper } from '@/store';

const SearchInput = dynamic(
  () => import('@/components/SearchPage/SearchInput')
);

const Search: NextPage = () => {
  const { query } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const { data, isLoading, isFetching, isError } = useSearchMoviesQuery(query);

  useEffect(() => {
    if (data && !isFetching && !isError && !isLoading) {
      dispatch(setSearchResults(data));
    }
  }, [isLoading, isFetching, data, dispatch, isError]);

  return (
    <div>
      <SearchInput />
      {data && query && (
        <div className='pt-[111px]'>
          <SearchResults refetching={isFetching} error={isError} />
        </div>
      )}
    </div>
  );
};

export default Search;

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async () => {
      dispatch(searchMovies.initiate('a'));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
