import {FC, useEffect, useState} from 'react';
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {IMovieCast} from "@/types/cast";
import {animationVariants} from "@/utilities/animationVariants";

interface Props {
    path: IMovieCast;
}

const CastImage: FC<Props> = ({path}) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w400${path.profile_path}`);
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
            className="relative rounded-md block w-full h-full overflow-hidden"
            style={{paddingTop: 100 / (400 / 650) + '%'}}
        >
            <Image
                src={imgSrc}
                layout={'fill'}
                objectFit={'cover'}
                alt={path.name}
                onError={() => setImgSrc('/fallback.jpeg')}
                onLoadingComplete={() => setLoaded(true)}
            />
        </motion.div>
    );
};

export default CastImage;
