import type {FC} from 'react';
import Link from "next/link";
import {MovieProps} from "@/types/MovieProps";
import MovieImage from "./MovieImage";
import {memo} from "react";

const MovieCard: FC<MovieProps> = ({movie}) => {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <a className="movie-card">
                <div className="rounded-md">
                    <MovieImage
                        movie={movie}
                    />
                </div>
            </a>
        </Link>
    );
};

export default memo(MovieCard);
