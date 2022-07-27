import {FC, memo} from 'react';
import {useAppSelector} from "@/hooks/redux";
import {Empty} from "antd";
import Spinner from "../Spinner";
import {MixedShow} from "@/types/search";
import ShowCard from "@/components/ShowCarousel/ShowCard";

interface Props {
    refetching: boolean;
    error: boolean;
}

const SearchResults: FC<Props> = ({refetching, error}) => {
    const {results: data} = useAppSelector(state => state.search)

    if (error) return <div>An error occurred!</div>

    if (data?.total_results === 0) return <Empty className="mt-6" description="No results"/>

    if (refetching) return <Spinner/>

    return (
        <div>
            {data && (
            <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.results.map((show: MixedShow) => {
                        return <ShowCard key={show.id} show={show} />
                    })}
                </div>
            </div>
            )}
        </div>
    );
};

export default memo(SearchResults);
