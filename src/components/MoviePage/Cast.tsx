import {FC} from 'react';
import CastList from "../CastList/CastList";
import {useAppSelector} from "@/hooks/redux";
import {useGetMovieCreditsQuery} from "@/services/themoviedb";
import Spinner from "../Spinner";

const Cast: FC = () => {
    const {id} = useAppSelector(state => state.movie)
    const {data: cast, isLoading} = useGetMovieCreditsQuery(id)

    if (isLoading) return <Spinner />

    return (
        <div>
            <CastList credits={cast} title={'Cast'} />
        </div>
    );
};

export default Cast;
