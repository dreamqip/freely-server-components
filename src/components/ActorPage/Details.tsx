import React, {FC, memo, useMemo} from 'react';
import {IPerson} from "@/types/person";
import Image from "next/image";
import {parsePersonDetails} from "@/utilities/parsePersonDetails";

interface Props {
    person: IPerson;
}

const Details: FC<Props> = ({person}) => {
    const parsedDetails = useMemo(() => {
        return parsePersonDetails(person);
    }, [person])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex justify-center lg:items-start">
                <Image
                    src={`https://image.tmdb.org/t/p/w342${person?.profile_path}`}
                    alt={person?.name}
                    width={342}
                    height={500}
                    objectFit="contain"
                />
            </div>
            <div className="mt-6 lg:col-span-2 lg:m-0">
                <h1 className="dark:text-white text-3xl">{person?.name}</h1>
                <table>
                    <tbody>
                    {parsedDetails && (
                        parsedDetails.map((detail: any) => {
                            return (
                                <tr key={detail.detailName}>
                                    <td className="pr-4 align-text-top dark:text-white">{detail.detailName}</td>
                                    <td className="dark:text-white">{detail.detailValue || 'Alive'}</td>
                                </tr>
                            );
                        })
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default memo(Details);
