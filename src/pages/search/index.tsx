import {NextPage} from "next";
import dynamic from "next/dynamic";
import SearchResults from "../../components/SearchPage/SearchResults";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {getRunningOperationPromises, searchMovies, useSearchMoviesQuery} from "@/services/themoviedb";
import {useEffect} from "react";
import {setSearchResults} from "@/features/search/searchSlice";
import {wrapper} from "../../store";

const SearchInput = dynamic(() => import('../../components/SearchPage/SearchInput'))

const Index: NextPage = () => {
    const {query} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()

    const {data, isLoading, isFetching, isError} = useSearchMoviesQuery(query)

    useEffect(() => {
        dispatch(setSearchResults(data))
    }, [isLoading, isFetching, data, dispatch])

    return (
        <div>
            <SearchInput />
            {data && query && (
                <div className="pt-[111px]">
                    <SearchResults refetching={isFetching} error={isError} />
                </div>
            )}
        </div>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    store.dispatch(searchMovies.initiate('a'))

    await Promise.all(getRunningOperationPromises());

    return {
        props: {}
    }
});
