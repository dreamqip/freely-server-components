import {FC, memo, useEffect, useState} from 'react';
import {useAnimation} from "framer-motion";
import {IMovie} from "@/types/movie";
import Image from "next/image";
import {motion} from "framer-motion";
import {animationVariants} from "@/utilities/animationVariants";

interface Props {
    movie: IMovie;
}

const MovieImage: FC<Props> = ({movie}) => {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w400${movie.poster_path}`);
    const [loaded, setLoaded] = useState(false);
    const animationControls = useAnimation();

    useEffect(() => {
        if (loaded) {
            animationControls.start("visible");
        }
    }, [loaded, animationControls]);

    return (
        <motion.div
            className="block relative w-full overflow-hidden rounded-md"
            initial="hidden"
            style={{paddingTop: 100 / (400 / 650) + '%'}}
            animate={animationControls}
            variants={animationVariants}
            transition={{ease: "easeOut", duration: 1.25}}
        >
            <Image
                className="rounded-md"
                src={src}
                objectFit={'cover'}
                layout={"fill"}
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

export default memo(MovieImage);
