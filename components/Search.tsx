import type {FC} from 'react';
import {Empty, Spin} from "antd";
import {IMovie} from "../types/IMovie";
import MovieCard from "./MoviesList/MovieCard";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import('./Pagination'));

interface Props {
    details: any;
    isLoading: boolean;
    search: string;
    pageIndex: number;
    setPageIndex: any;
}

const Search: FC<Props> = ({details, isLoading, search, setPageIndex, pageIndex}) => {

    if (details?.total_results === 0) return <Empty className="mt-6" description="No results"/>

    return (
        <div>
            {!isLoading
                ? (
                    search && (
                        <div className="mt-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {details.results.map((movie: IMovie) => {
                                    return <MovieCard key={movie.id} movie={movie}/>
                                })}
                            </div>
                            <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex}
                                        total={details?.total_results}/>
                        </div>
                    )
                )
                : <div className="flex justify-center items-center h-screen"><Spin size="large"/></div>
            }
        </div>
    );
};

export default Search;
