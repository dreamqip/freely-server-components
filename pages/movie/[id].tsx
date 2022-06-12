import type {FC} from 'react';
import {Skeleton} from "antd";
import {useRouter} from "next/router";
import Meta from "../../components/Meta";
import {useFetch} from "../../hooks/useFetch";
import ErrorPage from "../404";
import Hero from "../../components/MoviePage/Hero";
import dynamic from "next/dynamic";

const MovieTabs = dynamic(() => import('../../components/MoviePage/Tabs'))

const MoviePage: FC = () => {
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
            <Skeleton active/>
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
            <h2 className="mt-4 text-center font-bold dark:text-white text-2xl md:text-5xl">Reviews</h2>
            {/*<List
                itemLayout={"vertical"}
                dataSource={comments.results}
                renderItem={(item: any) => (
                    <List.Item>
                        <Comment
                            content={(
                                <p className="dark:text-white w-52 xs:w-auto">{item.content}</p>
                            )}
                            author={(
                                <span className="dark:text-primary-dark">{item.author}</span>
                            )}
                            avatar={`https://joeschmoe.io/api/v1/random`}
                            datetime={item.created_at}
                        />
                    </List.Item>
                )}
            />*/}
        </div>
    );
};

export default MoviePage;
