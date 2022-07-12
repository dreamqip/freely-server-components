import type {FC} from 'react';
import Link from "next/link";
import {IMovieCast} from "../../types/cast";
import CastImage from "./CastImage";

interface Props {
    person: IMovieCast;
}

const CastCard: FC<Props> = ({person}) => {

    return (
        <Link href={`/actor/${person.id}`} passHref>
            <a className="flex flex-col justify-center cursor-pointer">
                <span className="hover:scale-95 transition-all duration-500 flex">
                    <CastImage
                        width={250}
                        height={400}
                        path={person}
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
