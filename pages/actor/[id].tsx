import React from 'react';
import {NextPage} from "next";
import {useFetch} from "../../hooks/useFetch";
import {useRouter} from "next/router";
import Details from "../../components/ActorPage/Details";
import {Skeleton} from "antd";
import dynamic from "next/dynamic";

const ActorMovies = dynamic(() => import('../../components/ActorPage/ActorMovies'))

interface Props {
    id: any
}

const ActorPage: NextPage<Props> = () => {
    const router = useRouter()
    const {id} = router.query;
    const {
        details,
        isLoading
    } = useFetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=movie_credits`)

    if (isLoading) {
        return (
            <div className="grid gap-8 grid-cols-2">
                <Skeleton.Image className="w-full h-full"/>
                <Skeleton paragraph={{rows: 12}} active/>
            </div>
        )
    }

    return (
        <div>
            <Details person={details}/>
            <ActorMovies movies={details?.movie_credits.cast}/>
        </div>
    );
};

export default ActorPage;
