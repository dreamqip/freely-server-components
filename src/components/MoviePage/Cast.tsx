import {FC} from 'react';
import {useFetch} from "../../hooks/useFetch";
import CastList from "../CastList/CastList";
import {Spin} from "antd";

interface Props {
    id: any;
}

const Cast: FC<Props> = ({id}) => {
    const {details, isLoading} = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

    if (isLoading) return <Spin />

    return (
        <div>
            <CastList credits={details} title={'Cast'} />
        </div>
    );
};

export default Cast;
