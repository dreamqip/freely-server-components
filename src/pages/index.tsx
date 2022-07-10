import type {InferGetStaticPropsType, NextPage} from 'next'
import axios from "axios";
import Hero from "../components/Hero";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import Spinner from "../components/Spinner";

const MoviesList = dynamic(() => import('../components/MoviesList/MoviesList'), {
    suspense: true
});

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({popular, topRated, upcoming, now_playing}) => {

    return (
        <>
            <Hero/>
            <Suspense fallback={<Spinner />}>
                <MoviesList title="Now In Theaters" movies={now_playing}/>
                <MoviesList title="Upcoming movies" movies={upcoming}/>
                <MoviesList title="Popular now" movies={popular}/>
                <MoviesList title="Top Rated" movies={topRated}/>
            </Suspense>
        </>
    )
}

export default Home;

export async function getStaticProps() {
    const popularMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    const upcoming = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    const playing = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )

    return {
        props: {
            topRated: topRated.data,
            popular: popularMovies.data,
            upcoming: upcoming.data,
            now_playing: playing.data
        }
    }
}
