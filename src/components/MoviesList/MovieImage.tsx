import {FC, useEffect, useState} from 'react';
import {useAnimation} from "framer-motion";
import {IMovie} from "../../types/movie";
import Image from "next/image";
import {motion} from "framer-motion";
import {animationVariants} from "../../utilities/animationVariants";

interface Props {
    width: number;
    height: number;
    movie: IMovie;
}

const MovieImage: FC<Props> = ({width, height, movie}) => {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w300${movie.poster_path}`);
    const [loaded, setLoaded] = useState(false);
    const animationControls = useAnimation();

    useEffect(() => {
        if (loaded) {
            animationControls.start("visible");
        }
    }, [loaded, animationControls]);

    return (
        <motion.div
            className="flex"
            initial="hidden"
            animate={animationControls}
            variants={animationVariants}
            transition={{ease: "easeOut", duration: 1.25}}
        >
            <Image
                src={src}
                width={width}
                height={height}
                quality={100}
                alt={movie.title}
                onError={() => {
                    setSrc('/fallback.jpeg')
                }}
                onLoadingComplete={() => {
                    setLoaded(true)
                }}
            />
        </motion.div>
    );
};

export default MovieImage;
