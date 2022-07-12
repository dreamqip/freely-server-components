import React from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import Details from "../../components/ActorPage/Details";
import {Skeleton} from "antd";
import dynamic from "next/dynamic";
import {useGetActorByIdQuery} from "../../services/themoviedb";

const ActorMovies = dynamic(() => import('../../components/ActorPage/ActorMovies'))

interface Props {
    id: any
}

const ActorPage: NextPage<Props> = () => {
    const router = useRouter()
    const {id} = router.query;
    const {data, isLoading} = useGetActorByIdQuery(id)

    console.log(data)

    if (isLoading) {
        return (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                <Skeleton.Image className="w-full h-[300px] md:h-full"/>
                <Skeleton paragraph={{rows: 12}} active/>
            </div>
        )
    }

    return (
        <div>
            <Details person={data}/>
            <ActorMovies movies={data?.combined_credits.cast}/>
        </div>
    );
};

export default ActorPage;
