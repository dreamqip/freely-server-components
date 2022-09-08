import type {FC} from 'react';
import Image from "next/future/image";
import devices from '../../../public/devices.png';

const Watch: FC = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse items-center justify-center pt-16 min-h-[400px]">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl dark:text-white m-0 text-center lg:text-left max-w-min">Watch
                everywhere.</h2>
            <div>
                <Image
                    src={devices}
                    alt="devices"
                    width={600}
                    height={400}
                    placeholder="blur"
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default Watch;
