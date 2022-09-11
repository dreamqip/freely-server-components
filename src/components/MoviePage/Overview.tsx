import {FC, useEffect, useState} from 'react';
import Image from "next/future/image";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Similar from "./Similar";
import Recommended from "./Recommended";
import {useAppSelector} from "@/hooks/redux";
import {parseMovieDetails} from "@/utilities/parseMovieDetails";
import Spinner from "@/components/Spinner";

const Overview: FC = () => {
    const {movie} = useAppSelector(state => state.movie)
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w400${movie?.poster_path}`);
    const parsedDetails = movie && parseMovieDetails(movie);

    useEffect(() => {
        setImgSrc(`https://image.tmdb.org/t/p/w400${movie?.poster_path}`)
    }, [movie])

    return (
        <>
            {movie && parsedDetails
                ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,_1fr)] gap-8">
                            <Image
                                src={imgSrc}
                                alt={movie.title}
                                className="object-contain rounded-xl mx-auto sm:mx-0"
                                width={250}
                                height={400}
                                onError={() => setImgSrc('/fallback.jpeg')}
                            />
                            <div className="relative">
                                <h2 className="text-3xl dark:text-white">Storyline</h2>
                                <p className="dark:text-primary-dark text-lg">{movie.overview}</p>
                                <table className="border-spacing-2">
                                    <tbody>
                                    {parsedDetails.map((detail: any) => {
                                        return (
                                            <tr key={detail.detailName}>
                                                <td className="pr-10 dark:text-white">{detail.detailName}</td>
                                                <td className="dark:text-white">{detail.detailValue || 'Unknown'}</td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Cast/>
                        <Similar/>
                        <Recommended/>
                        <Reviews/>
                    </>)
                : <Spinner/>}
        </>
    );
};

export default Overview;
