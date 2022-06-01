import type {FC} from 'react';
import Image from "next/image";
import wanda from "../public/wanda.jpeg";

const Hero: FC = () => {
    return (
        <div className="flex items-center md:flex-row flex-col justify-between">
            <h1
                className="
                hidden
                md:block
                hero__image
                md:bg-cover
                lg:relative
                md:text-8xl
                z-10
                m-0
                bg-right-top
                bg-clip-text
                text-transparent
                text-5xl
                xl:text-9xl
                font-bold
                uppercase
                "
            >
                Movie <br/> change <br/> the world
            </h1>
                <Image
                    src={wanda}
                    alt="Wanda Maximoff from MCU"
                    width="400"
                    height="600"
                    placeholder="blur"
                    priority={true}
                    className="rounded-2xl md:rounded-tr-full md:rounded-bl-full"
                />
        </div>
    );
};

export default Hero;
