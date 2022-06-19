import type {FC} from 'react';
import {Card} from "antd";
import Image from "next/image";
import Link from "next/link";
import {shimmer, toBase64} from "../../utilities/shimmer";
import {IMovie} from "../../types/IMovie";
import {useState} from "react";

interface Props {
    movie: IMovie;
}

const ActorMovieCard: FC<Props> = ({movie}) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`);

    return (
        <Link href={`/movie/${movie.id}`}>
            <Card
                className="dark:bg-dark-theme flex justify-center cursor-pointer"
                bordered={false}
                bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 0
                }}
            >
                <span className="hover:scale-95 transition-all duration-500 mb-6 ">
                    <Image
                        src={imgSrc}
                        width={250}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 400))}`}
                        height={400}
                        onError={() => {
                            setImgSrc('/fallback.jpeg')
                        }}
                        className="sm:rounded-lg"
                        alt={movie.title}
                    />
                </span>
                <div className="text-black hidden sm:block dark:text-white font-medium text-xl">{movie.title}</div>
                <div className="text-md text-gray-500">{movie.character}</div>
            </Card>
        </Link>
    );
};

export default ActorMovieCard;
