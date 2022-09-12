import { FC, memo, useEffect, useState } from "react"
import { LazyMotion, m, useAnimation } from "framer-motion"
import Image from "next/image"
import { animationVariants } from "@/utilities/animationVariants"
import { MixedShow } from "@/types/search"

interface Props {
    show: MixedShow
}

const loadFeatures = () =>
    import("../Animated/DomAnimation").then((res) => res.default)

const ShowImage: FC<Props> = ({ show }) => {
    const [src, setSrc] = useState(
        `https://image.tmdb.org/t/p/w400${show.poster_path}`
    )
    const [loaded, setLoaded] = useState(false)
    const animationControls = useAnimation()

    useEffect(() => {
        if (loaded) {
            animationControls.start("visible")
        }
    }, [loaded, animationControls])

    return (
        <LazyMotion strict features={loadFeatures}>
            <m.div
                className="relative block w-full overflow-hidden rounded-md"
                initial="hidden"
                style={{ paddingTop: 100 / (400 / 650) + "%" }}
                animate={animationControls}
                variants={animationVariants}
                transition={{ ease: "easeOut", duration: 1.25 }}
            >
                <Image
                    className="rounded-md"
                    src={src}
                    objectFit={"cover"}
                    layout={"fill"}
                    quality={100}
                    alt={("title" in show && show.title) || show.name}
                    onError={() => {
                        setSrc("/fallback.jpeg")
                    }}
                    onLoadingComplete={() => {
                        setLoaded(true)
                    }}
                />
            </m.div>
        </LazyMotion>
    )
}

export default memo(ShowImage)
