import type {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import {shimmer, toBase64} from "@/utilities/shimmer";
import {useState} from "react";
import {IActorCast} from "@/types/cast";

interface Props {
    show: IActorCast;
}

const ActorMovieCard: FC<Props> = ({show}) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w400${show.poster_path}`);

    if (show.media_type === "tv") {
        return (
            <Link href={`/series/${show.id}`} passHref>
                <a className="flex flex-col justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="mb-6">
                    <Image
                        src={imgSrc}
                        width={250}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 400))}`}
                        height={400}
                        onError={() => setImgSrc('/fallback.jpeg')}
                        className="sm:rounded-lg"
                        alt={show.name}
                    />
                </span>
                    <div className="text-black hidden sm:block dark:text-white font-medium text-xl">{show.name}</div>
                    <div className="text-md text-gray-500">{show.character}</div>
                </a>
            </Link>
        )
    }

    return (
        <Link href={`/movie/${show.id}`} passHref>
            <a className="flex flex-col justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                <span className="mb-6">
                    <Image
                        src={imgSrc}
                        width={250}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 400))}`}
                        height={400}
                        onError={() => setImgSrc('/fallback.jpeg')}
                        className="sm:rounded-lg"
                        alt={"title" in show ? show.title : ""}
                    />
                </span>
                <div className="text-black hidden sm:block dark:text-white font-medium text-xl">{show.title}</div>
                <div className="text-md text-gray-500">{show.character}</div>
            </a>
        </Link>
    );
};

export default ActorMovieCard;
