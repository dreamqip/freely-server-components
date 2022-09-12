import type { FC } from "react"
import Image from "next/future/image"
import explore from "../../../public/explore.png"

const Explore: FC = () => {
    return (
        <section className="relative flex min-h-[400px] flex-col items-center justify-center pt-10 md:flex-row">
            <div className="max-w-xl">
                <h2 className="m-0 text-center text-5xl dark:text-white sm:text-6xl md:text-left lg:text-8xl">
                    Explore.
                </h2>
                <h3 className="m-0 mt-6 text-center text-3xl font-normal leading-6 tracking-widest dark:text-white md:text-left md:text-4xl">
                    Millions of movies, TV shows and people
                </h3>
            </div>
            <div className="relative flex min-h-[400px] w-full justify-center">
                <Image
                    src={explore}
                    alt="explore"
                    priority={true}
                    width={800}
                    height={400}
                    placeholder="blur"
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default Explore
