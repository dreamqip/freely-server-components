import {FC, useEffect, useState} from 'react';
import Image from "next/image";
import {useAppSelector} from "@/hooks/redux";
import {parseSeriesDetails} from "@/utilities/parseSeriesDetails";
import Cast from "@/components/SeriesPage/Cast";
import Similar from "@/components/SeriesPage/Similar";
import Recommended from "@/components/SeriesPage/Recommended";
import Reviews from "@/components/SeriesPage/Reviews";

const Overview: FC = () => {
    const {series} = useAppSelector(state => state.series)
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w400${series?.poster_path}`);
    const [parsedDetails, setParsedDetails] = useState<any>(null);

    useEffect(() => {
        setImgSrc(`https://image.tmdb.org/t/p/w400${series?.poster_path}`)
    }, [series])

    useEffect(() => {
        if (series) {
            setParsedDetails(parseSeriesDetails(series))
        }
    }, [series])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,_1fr)] gap-8">
                <Image
                    src={imgSrc}
                    alt={series?.name}
                    width={250}
                    height={400}
                    onError={() => {
                        setImgSrc('/fallback.jpeg')
                    }}
                    objectFit={"contain"}
                />
                <div className="relative">
                    <h2 className="text-3xl dark:text-white">Storyline</h2>
                    <p className="dark:text-primary-dark text-lg">{series?.overview}</p>
                    <table className="border-spacing-2">
                        <tbody>
                        {parsedDetails &&
                            parsedDetails.map((detail: any) => {
                                return (
                                    <tr key={detail.detailName}>
                                        <td className="pr-10 dark:text-white">{detail.detailName}</td>
                                        <td className="dark:text-white">{detail.detailValue || 'Unknown'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {series && (
                <>
                    <Cast />
                    <Similar />
                    <Recommended />
                    <Reviews />
                </>
            )}
        </>
    );
};

export default Overview;
