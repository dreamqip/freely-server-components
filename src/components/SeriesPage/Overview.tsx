import { FC, useEffect, useState } from "react"
import Image from "next/future/image"
import { useAppSelector } from "@/hooks/redux"
import { parseSeriesDetails } from "@/utilities/parseSeriesDetails"
import Cast from "@/components/SeriesPage/Cast"
import Similar from "@/components/SeriesPage/Similar"
import Recommended from "@/components/SeriesPage/Recommended"
import Reviews from "@/components/SeriesPage/Reviews"
import Spinner from "@/components/Spinner"

const Overview: FC = () => {
    const { series } = useAppSelector((state) => state.series)
    const [imgSrc, setImgSrc] = useState(
        `https://image.tmdb.org/t/p/w400${series?.poster_path}`
    )
    const parsedDetails = series && parseSeriesDetails(series)

    useEffect(() => {
        setImgSrc(`https://image.tmdb.org/t/p/w400${series?.poster_path}`)
    }, [series])

    return (
        <>
            {series && parsedDetails ? (
                <>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_minmax(0,_1fr)]">
                        <Image
                            src={imgSrc}
                            alt={series.name}
                            className="mx-auto rounded-xl object-contain sm:mx-0"
                            width={250}
                            height={400}
                            onError={() => setImgSrc("/fallback.jpeg")}
                        />
                        <div className="relative">
                            <h2 className="text-3xl dark:text-white">
                                Storyline
                            </h2>
                            <p className="text-lg dark:text-primary-dark">
                                {series.overview}
                            </p>
                            <table className="border-spacing-2">
                                <tbody>
                                    {parsedDetails.map((detail: any) => {
                                        return (
                                            <tr key={detail.detailName}>
                                                <td className="pr-10 dark:text-white">
                                                    {detail.detailName}
                                                </td>
                                                <td className="dark:text-white">
                                                    {detail.detailValue ||
                                                        "Unknown"}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Cast />
                    <Similar />
                    <Recommended />
                    <Reviews />
                </>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default Overview
