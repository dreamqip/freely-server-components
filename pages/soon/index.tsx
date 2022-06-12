import React from 'react';
import type {NextPage} from "next";

interface AboutProps {
    data?: any
}

const data = [
    'Search movies',
    'Movie recommendations',
    'Movie video content',
    'Movie cast'
]

const About: NextPage<AboutProps> = () => {
    return (
        <div>
            <h1 className="text-7xl text-center dark:text-white">What's coming soon</h1>
            <ul className="list-decimal pl-10">
                {data.map((item: string) => {
                    return <li key={item} className="text-xl dark:text-white"><strong>{item}</strong></li>
                })}
            </ul>
        </div>
    );
};

export default About;
