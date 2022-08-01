import type {FC} from 'react';
import {useEffect, useState} from "react";
import Image from "next/image";
import {useAppSelector} from "@/hooks/redux";
import {motion, useMotionValue, useScroll} from "framer-motion";
import {animationVariants} from "@/utilities/animationVariants";
import {PlayIcon} from "@heroicons/react/solid";
import Link from "next/link";

const Hero: FC = () => {
    const {movie} = useAppSelector(state => state.movie);
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`);
    const [loaded, setLoaded] = useState(false);
    const [loadedLogo, setLoadedLogo] = useState(false);
    const {scrollYProgress} = useScroll();
    const scrollProgress = useMotionValue(1)

    useEffect(() => {
        setImgSrc(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`)
    }, [movie])

    useEffect(() => {
        scrollYProgress.onChange(progress => {
            const newProgress = Math.max((1 - 8 * progress), 0.2);
            scrollProgress.set(newProgress);
        })

        return () => scrollYProgress.clearListeners()
    }, [scrollProgress, scrollYProgress])

    return (
        <>
            <motion.div
                initial="hidden"
                animate={loaded ? 'visible' : 'hidden'}
                variants={animationVariants}
                transition={{ease: "easeOut", duration: 1.25}}
                className="absolute sm:fixed w-full max-h-[300px] sm:max-h-full inset-0 z-0 select-none"
                style={{opacity: scrollProgress}}
            >
                <Image
                    src={imgSrc}
                    alt={movie?.title}
                    layout={"fill"}
                    priority={true}
                    objectFit={"cover"}
                    onError={() => setImgSrc('/fallback.jpeg')}
                    onLoad={() => setLoaded(false)}
                    onLoadingComplete={() => setLoaded(true)}
                />
                <div className="absolute z-0 inset-0 h-full radial-gradient"></div>
            </motion.div>
            <div className="relative">
                <div className="max-w-xl">
                    {movie?.images?.logos && movie.images.logos.length > 0
                        ? <div className="py-6">
                            <motion.div
                                initial="hidden"
                                animate={loadedLogo ? 'visible' : 'hidden'}
                                variants={animationVariants}
                                transition={{ease: "easeOut", duration: 1}}
                                className="relative max-w-[180px] min-h-[100px] md:max-w-[341px] md:min-h-[170px]"
                            >
                                <Image
                                    alt={movie?.title}
                                    layout={"fill"}
                                    objectFit={'contain'}
                                    objectPosition={'center'}
                                    priority={true}
                                    src={`https://image.tmdb.org/t/p/original${movie?.images?.logos[0].file_path}`}
                                    onLoad={() => setLoadedLogo(false)}
                                    onLoadingComplete={() => setLoadedLogo(true)}
                                />
                            </motion.div>
                        </div>
                        : <h1 className="text-white text-2xl py-6 md:py-10 md:text-5xl m-0">{movie?.title}</h1>
                    }
                    <span
                        className="text-white text-lg hidden md:block">{movie?.overview?.substring(0, 150) + '...'}</span>
                    <div
                        className="text-white tracking-widest leading-6 my-4">{movie?.genres?.map((genre) => genre.name).join(', ')}</div>
                    <Link href={{
                        pathname: '/room/[id]',
                        query: { type: 'movie', id: movie?.id }
                    }}>
                        <button className="play-btn">
                            <PlayIcon className="w-10 h-10 fill-current"/>
                            <span className="ml-2">play</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hero;
