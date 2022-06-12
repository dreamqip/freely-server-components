import React, {FC} from 'react';
import Image from "next/image";
import {IMovie} from "../../types/IMovie";

interface PageProps {
    movieDetails: IMovie;
    details: any;
}

const Overview: FC<PageProps> = ({movieDetails, details}) => {
    return (
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
    );
};

export default Overview;
