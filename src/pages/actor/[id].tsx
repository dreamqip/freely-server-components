import {NextPage} from "next";
import {useRouter} from "next/router";
import Details from "@/components/ActorPage/Details";
import dynamic from "next/dynamic";
import {
    getActorById,
    getRunningOperationPromises,
    useGetActorByIdQuery,
} from "@/services/themoviedb";
import {wrapper} from "../../store";
import {skipToken} from "@reduxjs/toolkit/query";
import ImageList from "@/components/ActorPage/ImageList";

const ActorMovies = dynamic(() => import('@/components/ActorPage/ActorMovies'))

const ActorPage: NextPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const result = useGetActorByIdQuery(
        typeof id === 'string' ? parseInt(id) : skipToken,
        {
            skip: router.isFallback
        }
    );
    const {data} = result;

    return (
        <div>
            <Details person={data}/>
            <ActorMovies movies={data?.combined_credits.cast}/>
            <ImageList images={data?.images.profiles} />
        </div>
    );
};

export default ActorPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const id = context.params?.id;

    if (typeof id === 'string') {
        store.dispatch(getActorById.initiate(parseInt(id)))
    }

    await Promise.all(getRunningOperationPromises());

    return {
        props: {}
    }

});
