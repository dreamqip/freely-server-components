import type {FC} from 'react';
import Link from "next/link";
import {MovieProps} from "../../types/MovieProps";
import MovieImage from "./MovieImage";

const MovieCard: FC<MovieProps> = ({movie}) => {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <a className="flex flex-col justify-center cursor-pointer">
                <span className="hover:scale-95 transition-all duration-500 mb-6 ">
                    <MovieImage
                        width={250}
                        height={400}
                        movie={movie}
                    />
                </span>
                <div className="text-black hidden sm:block dark:text-white text-center font-medium text-xl">
                    {movie.title}
                </div>
            </a>
        </Link>
    );
};

export default MovieCard;
