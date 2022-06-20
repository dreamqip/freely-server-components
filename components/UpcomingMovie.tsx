import type {FC} from 'react';
import {Badge} from "antd";
import Image from "next/image";
import Link from "next/link";
import {MovieProps} from "../types/MovieProps";

const UpcomingMovie: FC<MovieProps> = ({movie}) => {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <a className="flex items-center flex-col">
                <Badge.Ribbon className="bg-primary-500" text={movie.original_language}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                        width={250}
                        height={400}
                        className="object-contain rounded-lg"
                        alt={movie.title}
                    />
                </Badge.Ribbon>
                <span
                    className="text-black dark:text-white font-medium text-xl">{movie.title}</span>
                <time className="text-primary-500 dark:text-primary-dark">{movie.release_date}</time>
            </a>
        </Link>
    );
};

export default UpcomingMovie;
