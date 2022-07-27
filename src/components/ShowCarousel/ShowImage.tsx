import {FC, memo, useEffect, useState} from 'react';
import {useAnimation} from "framer-motion";
import Image from "next/image";
import {motion} from "framer-motion";
import {animationVariants} from "@/utilities/animationVariants";
import {MixedShow} from "@/types/search";

interface Props {
    show: MixedShow;
}

const ShowImage: FC<Props> = ({show}) => {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w400${show.poster_path}`);
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
                alt={"title" in show && show.title || show.name}
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

export default memo(ShowImage);
