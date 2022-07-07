import type {FC} from 'react';
import CastCard from "./CastCard";
import Glider from 'react-glider'
import Pane from '../Pane'
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/solid";
import {useEffect, useRef, useState} from "react";
import {ICredits} from "../../types/credits";
import {ICast} from "../../types/cast";

interface MoviesListProps {
    credits: ICredits;
    title: string;
}

const CastList: FC<MoviesListProps> = ({credits, title}) => {
    const prev = useRef<HTMLButtonElement>(null)
    const next = useRef<HTMLButtonElement>(null)
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        setIsInitialized(Boolean(prev.current && next.current));
    }, [prev, next]);

    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-6xl">{title}</h2>
            {isInitialized && credits && (
                <Glider
                    draggable
                    dragVelocity={1}
                    slidesToShow={2}
                    hasArrows
                    arrows={{
                        prev: prev.current,
                        next: next.current
                    }}
                    slidesToScroll={2}
                    responsive={[
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            }
                        }
                    ]}
                >
                    {credits.cast.map((person: ICast) => {
                        return (
                            <Pane key={person.id} className="mr-2">
                                <CastCard person={person}/>
                            </Pane>
                        )
                    })}
                </Glider>
            )}
            <div className="relative left-10 mt-4">
                <button
                    ref={next}
                    type="button"
                    className="glider-prev left-6"
                    aria-label="Next"
                >
                    <ArrowRightIcon className="w-10 h-10"/>
                </button>
                <button
                    ref={prev}
                    type="button"
                    className="glider-prev"
                    aria-label="Previous"
                >
                    <ArrowLeftIcon className="w-10 h-10"/>
                </button>
            </div>
        </div>
    );
};

export default CastList;
