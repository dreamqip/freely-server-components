import type {FC} from 'react';
import {Card} from "antd";
import Image from "next/image";
import Link from "next/link";
import {ICast} from "../../types/ICast";
import {useEffect, useState} from "react";
import {shimmer, toBase64} from "../../utilities/shimmer";

interface Props {
    person: ICast;
}

const CastCard: FC<Props> = ({person}) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w342${person.profile_path}`);

    return (
        <Link href={`/actor/${person.id}`} passHref>
            <a className="flex flex-col justify-center cursor-pointer">
                <span className="hover:scale-95 transition-all duration-500 flex">
                    <Image
                        src={imgSrc}
                        width={250}
                        height={400}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 400))}`}
                        onError={() => {
                            setImgSrc('/fallback.jpeg')
                        }}
                        className="sm:rounded-lg"
                        alt={person.name}
                    />
                </span>
                <div className="text-lg text-black dark:text-white">{person.name}</div>
                <div className="text-md text-gray-500">
                    {
                        person.character.length > 35
                            ? person.character.substring(0, 35) + '...'
                            : person.character
                    }
                </div>
            </a>
        </Link>
    );
};

export default CastCard;
