import {FC} from 'react';
import Image from "next/image";
import {IMovie} from "../../types/IMovie";
import Cast from "./Cast";
import Reviews from "./Reviews";

interface PageProps {
    movieDetails: IMovie;
    details: any;
    id: any;
}

const Overview: FC<PageProps> = ({movieDetails, details, id}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,_1fr)] gap-8">
                <Image
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    width={250}
                    height={400}
                    objectFit={"contain"}
                />
                <div>
                    <h2 className="text-3xl dark:text-white">Storyline</h2>
                    <p className="dark:text-primary-dark">{movieDetails.overview}</p>
                    <table className="border-spacing-2">
                        <tbody>
                        {details &&
                            details.map((detail: any) => {
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
            <Cast id={id}/>
            <h2 className="mt-4 text-center font-bold dark:text-white text-2xl md:text-5xl">Reviews</h2>
            <Reviews id={id}/>
        </>

    );
};

export default Overview;
