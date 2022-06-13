import type {FC} from 'react';
import {Card} from "antd";
import Image from "next/image";
import Link from "next/link";
import {ICast} from "../../types/ICast";
import {useEffect, useState} from "react";

interface Props {
    person: ICast;
}

const CastCard: FC<Props> = ({person}) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w342${person.profile_path}`);

    return (
        <Link href={``}>
            <Card
                className="dark:bg-dark-theme flex justify-center cursor-pointer"
                bordered={false}
                bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0
                }}
            >
                <span className="hover:scale-95 transition-all duration-500">
                    <Image
                        src={imgSrc}
                        width={250}
                        height={400}
                        onError={() => {
                            setImgSrc('/image-placeholder.webp')
                        }}
                        className="sm:rounded-lg"
                        alt={person.name}
                    />
                </span>
                <div className="text-lg dark:text-white">{person.name}</div>
                <div className="text-md text-gray-500">{
                    person.character.length > 35
                        ? person.character.substring(0, 35) + '...'
                        : person.character
                }</div>
            </Card>
        </Link>
    );
};

export default CastCard;
