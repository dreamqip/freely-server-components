import type {FC} from 'react';
import {Card} from "antd";
import Image from "next/image";
import Link from "next/link";
import {MovieProps} from "../../types/MovieProps";
import {shimmer, toBase64} from "../../utilities/shimmer";
import {useState} from "react";

const MovieCard: FC<MovieProps> = ({movie}) => {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`);

    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <a>
                <Card
                    className="dark:bg-dark-theme flex justify-center cursor-pointer"
                    bordered={false}
                    bodyStyle={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0
                    }}
                >
                <span className="hover:scale-95 transition-all duration-500 mb-6 ">
                    <Image
                        src={src}
                        width={250}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 400))}`}
                        height={400}
                        onError={() => {
                            setSrc('/fallback.jpeg')
                        }}
                        className="sm:rounded-lg"
                        alt={movie.title}
                    />
                </span>
                    <div
                        className="text-black hidden sm:block dark:text-white text-center font-medium text-xl">{movie.title}</div>
                    <time
                        className="text-primary-500 hidden sm:block mt-4 dark:text-primary-dark">{movie.release_date}</time>
                </Card>
            </a>
        </Link>
    );
};

export default MovieCard;
