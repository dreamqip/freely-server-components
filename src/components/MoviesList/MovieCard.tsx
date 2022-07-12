import type {FC} from 'react';
import Link from "next/link";
import {MovieProps} from "../../types/MovieProps";
import MovieImage from "./MovieImage";

const MovieCard: FC<MovieProps> = ({movie}) => {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <a className="flex items-center justify-center cursor-pointer">
                <div className="movie-card sm:rounded-lg hover:scale-105 transition-all duration-500">
                    <MovieImage
                        width={300}
                        height={450}
                        movie={movie}
                    />
                </div>
            </a>
        </Link>
    );
};

export default MovieCard;
