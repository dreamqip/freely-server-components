import {FC} from 'react';
import Image from "next/image";
import devices from '../../../public/devices.png';

const Watch: FC = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse items-center justify-center pt-16 min-h-[400px]">
            <h2 className="text-4xl sm:text-6xl md:text-8xl dark:text-white m-0 text-center md:text-left max-w-min">Watch
                everywhere.</h2>
            <div>
                <Image
                    src={devices}
                    alt="devices"
                    width={600}
                    height={600}
                    placeholder="blur"
                />
            </div>
        </section>
    );
};

export default Watch;
