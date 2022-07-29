import {FC} from 'react';
import Image from "next/image";
import explore from '../../../public/explore.png';

const Explore: FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center pt-10 min-h-[400px]">
            <div className="max-w-xl">
                <h2 className="text-5xl md:text-8xl dark:text-white m-0 text-center md:text-left">Explore.</h2>
                <h3 className="text-3xl md:text-4xl dark:text-white m-0 text-center md:text-left font-normal mt-6 tracking-widest leading-6">Millions
                    of movies, TV
                    shows and people</h3>
            </div>
            <div className="flex relative min-h-[400px] w-full">
                <Image
                    src={explore}
                    alt="explore"
                    layout={'fill'}
                    quality={100}
                />
            </div>
        </section>
    );
};

export default Explore;
