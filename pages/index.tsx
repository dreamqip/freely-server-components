import type {NextPage} from 'next'
import axios from "axios";
import MoviesList from "../components/MoviesList";
import Hero from "../components/Hero";
import UpcomingMovies from "../components/UpcomingMovies";
import Search from "../components/Search";

interface HomeProps {
    popular?: any;
    topRated?: any;
    upcoming?: any;
}

const Home: NextPage<HomeProps> = ({popular, topRated, upcoming}) => {

    return (
        <>
            <Hero/>
            <UpcomingMovies movies={upcoming}/>
            {/*<Search />*/}
            <MoviesList title="Popular now" movies={popular}/>
            <MoviesList title="Top Rated" movies={topRated}/>
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

    return {
        props: {
            topRated: topRated.data,
            popular: popularMovies.data,
            upcoming: upcoming.data
        }
    }
}
