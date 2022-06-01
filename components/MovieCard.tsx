import type {FC} from 'react';
import {Badge, Card} from "antd";
import Image from "next/image";
import Link from "next/link";
import {MovieProps} from "../types/MovieProps";

const MovieCard: FC<MovieProps> = ({movie}) => {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <Card
                className="dark:bg-dark-theme cursor-pointer"
                bordered={false}
                bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Badge
                    title={'Movie average vote'}
                    count={movie.vote_average}
                    color="#6200EE"
                >
                    <Image
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                        width={250}
                        height={400}
                        className="mb-6 select-none rounded-lg"
                        alt={movie.title}
                    />
                </Badge>
                <div className="text-black dark:text-white text-center font-medium text-xl">{movie.title}</div>
                <time className="text-primary-500 mt-4 dark:text-primary-dark">{movie.release_date}</time>
            </Card>
        </Link>
    );
};

export default MovieCard;
