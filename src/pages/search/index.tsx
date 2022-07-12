import {NextPage} from "next";
import dynamic from "next/dynamic";
import SearchResults from "../../components/SearchPage/SearchResults";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useSearchMoviesQuery} from "../../services/themoviedb";
import {useEffect} from "react";
import {setSearchResults} from "../../features/search/searchSlice";

const SearchInput = dynamic(() => import('../../components/SearchPage/SearchInput'))
const Pagination = dynamic(() => import('../../components/SearchPage/Pagination'))

const Index: NextPage = () => {
    const {query, pageIndex} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()

    const {data, isLoading, isFetching, isError} = useSearchMoviesQuery({
        searchQuery: query,
        page: pageIndex
    })

    useEffect(() => {
        dispatch(setSearchResults(data))
    }, [isLoading, isFetching, data, dispatch])

    return (
        <div>
            <SearchInput />
            {data && query && (
                <div className="pt-[111px]">
                    <SearchResults loading={isLoading} refetching={isFetching} error={isError} />
                    <Pagination />
                </div>
            )}
        </div>
    );
};

export default Index;
