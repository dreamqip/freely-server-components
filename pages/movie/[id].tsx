import {Skeleton} from "antd";
import {useRouter} from "next/router";
import Meta from "../../components/Meta";
import {useFetch} from "../../hooks/useFetch";
import ErrorPage from "../404";
import Hero from "../../components/MoviePage/Hero";
import dynamic from "next/dynamic";
import {NextPage} from "next";

const MovieTabs = dynamic(() => import('../../components/MoviePage/Tabs'))

const MoviePage: NextPage = () => {
    const router = useRouter()
    const {id} = router.query;
    const {
        details,
        isLoading,
        isError
    } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);

    if (isLoading) return (
        <>
            <Skeleton.Image className="w-full h-[600px]"/>
            <Skeleton className="mt-6" active/>
        </>
    )
    if (isError) return <ErrorPage/>

    return (
        <div className="flex flex-col justify-center items-center pt-6">
            <Meta
                description={details?.overview}
                title={details?.title}
            />
            <Hero details={details}/>
            <MovieTabs movie={details} id={id}/>
        </div>
    );
};

export default MoviePage;
