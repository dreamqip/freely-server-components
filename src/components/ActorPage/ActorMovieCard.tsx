import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { shimmer, toBase64 } from "@/utilities/shimmer"
import { useState } from "react"
import { IActorCast } from "@/types/cast"

interface Props {
    show: IActorCast
}

const ActorMovieCard: FC<Props> = ({ show }) => {
    const [imgSrc, setImgSrc] = useState(
        `https://image.tmdb.org/t/p/w400${show.poster_path}`
    )

    if (show.media_type === "tv") {
        return (
            <Link
                href={`/series/${show.id}`}
                className="flex cursor-pointer flex-col justify-center transition-all duration-300 ease-in-out hover:scale-105"
            >
                <span className="mb-6">
                    <Image
                        src={imgSrc}
                        width={250}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(250, 400)
                        )}`}
                        height={400}
                        onError={() => setImgSrc("/fallback.jpeg")}
                        className="sm:rounded-lg"
                        alt={show.name}
                    />
                </span>
                <div className="hidden text-xl font-medium text-black dark:text-white sm:block">
                    {show.name}
                </div>
                <div className="text-md text-gray-500">{show.character}</div>
            </Link>
        )
    }

    return (
        <Link
            href={`/movie/${show.id}`}
            className="flex cursor-pointer flex-col justify-center transition-all duration-300 ease-in-out hover:scale-105"
        >
            <span className="mb-6">
                <Image
                    src={imgSrc}
                    width={250}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(250, 400)
                    )}`}
                    height={400}
                    onError={() => setImgSrc("/fallback.jpeg")}
                    className="sm:rounded-lg"
                    alt={"title" in show ? show.title : ""}
                />
            </span>
            <div className="hidden text-xl font-medium text-black dark:text-white sm:block">
                {show.title}
            </div>
            <div className="text-md text-gray-500">{show.character}</div>
        </Link>
    )
}

export default ActorMovieCard
