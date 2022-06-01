import type {FC} from 'react';
import type {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import type {MovieProps} from "../../types/MovieProps";
import Image from "next/image";
import {Comment, List, Tag} from "antd";
import {IMovie} from "../../types/IMovie";
import {useRouter} from "next/router";
import {ArrowLeftIcon} from "@heroicons/react/solid";
import Meta from "../../components/Meta";
import Images from "../../components/MoviePage/Images";

const MoviePage: FC<MovieProps> = ({movie, images, comments}) => {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center items-center pt-6 relative">
            <Meta
                description={movie.overview}
                title={movie.title}
            />
            <ArrowLeftIcon onClick={() => router.back()}
                           className="w-6 lg:w-14 top-0 left-0 absolute dark:text-white transition hover:-translate-x-3"></ArrowLeftIcon>
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width={1000}
                height={600}
                className="rounded-2xl"
            />
            <h1 className="mt-4 text-center font-bold dark:text-white text-2xl md:text-6xl">{movie.title}</h1>
            <p className="text-center md:text-lg mx-auto max-w-2xl dark:text-primary-dark">{movie.overview}</p>
            <div className="flex flex-col justify-start items-start w-full">

                <p className="mt-5 flex gap-2 dark:text-white text-sm">Genres: {movie.genres.map((genre: any) =>
                    <Tag key={genre.id} className="dark:bg-primary-500 m-0 dark:text-white">{genre.name}</Tag>
                )}
                </p>
                <time className="dark:text-white text-lg">Release Date: {movie.release_date}</time>
            </div>
            <h2 className="mt-4 text-center font-bold dark:text-white text-2xl md:text-5xl">Images</h2>
            <Images images={images}/>
            <h2 className="mt-4 text-center font-bold dark:text-white text-2xl md:text-5xl">Reviews</h2>
            <List
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
            />
        </div>
    );
};

export default MoviePage;

export const getStaticProps: GetStaticProps = async (context) => {
    const {id}: any = context.params;
    const movieDetails = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
        .then(res => res.data);
    const movieImages = await axios(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.API_KEY}&language=en-US`)
        .then(res => res.data);
    const movieComments = await axios(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`)
        .then(res => res.data)

    return {
        props: {
            movie: movieDetails,
            images: movieImages,
            comments: movieComments
        }
    }
}

export const getStaticPaths: GetStaticPaths = async (context) => {

    const popularMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res => res.data.results)
    const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res => res.data.results)
    const upcoming = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res => res.data.results)

    const ids = popularMovies.map((movie: IMovie) => movie.id).concat(topRated.map((movie: IMovie) => movie.id)).concat(upcoming.map((movie: IMovie) => movie.id));
    const paths = ids.map((id: any) => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false
    }
}
