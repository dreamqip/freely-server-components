import type {FC} from 'react';
import {shimmer, toBase64} from "../../utilities/shimmer";
import Image from "next/image";
import {ArrowLeftIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks/redux";

const Hero: FC = () => {
    const router = useRouter();
    const {movie} = useAppSelector(state => state.movie)
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`);

    useEffect(() => {
        setImgSrc(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`)
    }, [movie])

    return (
        <div className="w-full relative">
            <ArrowLeftIcon
                onClick={() => router.back()}
                className="w-6 cursor-pointer lg:w-14 z-20 top-2 left-2 md:top-10 md:left-10 absolute text-white transition hover:-translate-x-3"
            />
            <div className="absolute max-w-xl top-1/4 md:top-1/3 left-10 z-10">
                <h1 className="text-white text-2xl md:text-4xl m-0">{movie?.title}</h1>
                <p className="text-white hidden md:block">{movie?.overview}</p>
            </div>
            <Image
                src={imgSrc}
                alt={movie?.title}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1280, 700))}`}
                width={1280}
                onError={() => {
                    setImgSrc('/fallback.jpeg')
                }}
                height={700}
                objectFit={"cover"}
                className="rounded-md"
            />
        </div>
    );
};

export default Hero;
