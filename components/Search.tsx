import type {FC} from 'react';
import {useState} from "react";
import {Input, Spin} from "antd";
import {useFetch} from "../hooks/useFetch";
import {IMovie} from "../types/IMovie";
import MovieCard from "./MoviesList/MovieCard";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import('./Pagination'));

const Search: FC = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [search, setSearch] = useState('')

    const onSearch = (value: string) => setSearch(value);

    const {
        details,
        isLoading
    } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${pageIndex}`)

    return (
        <div>
            <Input.Search placeholder="input search text" onSearch={onSearch}/>
            {!isLoading
                ? (
                    search && (
                        <div>
                            <div className="grid grid-cols-4 gap-6">
                                {details.results.map((movie: IMovie) => {
                                    return <MovieCard movie={movie}/>
                                })}
                            </div>
                            <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex}
                                        total={details?.total_results}/>
                        </div>
                    )
                )
                : <div className="flex justify-center"><Spin size="large"/></div>
            }
        </div>
    );
};

export default Search;
