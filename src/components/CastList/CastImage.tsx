import {FC, useEffect, useState} from 'react';
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {IMovieCast} from "../../types/cast";
import {animationVariants} from "../../utilities/animationVariants";

interface Props {
    width: number;
    height: number;
    path: IMovieCast;
}

const CastImage: FC<Props> = ({width, height, path}) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w342${path.profile_path}`);
    const [loaded, setLoaded] = useState(false);
    const animationControls = useAnimation();

    useEffect(() => {
        if (loaded) {
            animationControls.start("visible");
        }
    }, [loaded, animationControls]);

    return (
        <motion.div
            initial="hidden"
            animate={animationControls}
            variants={animationVariants}
            transition={{ease: "easeOut", duration: 1.25}}
        >
            <Image
                src={imgSrc}
                width={width}
                height={height}
                className="sm:rounded-lg"
                alt={path.name}
                onError={() => {
                    setImgSrc('/fallback.jpeg')
                }}
                onLoadingComplete={() => {
                    setLoaded(true)
                }}
            />
        </motion.div>
    );
};

export default CastImage;
