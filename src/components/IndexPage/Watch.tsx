import type { FC } from "react"
import Image from "next/future/image"
import devices from "../../../public/devices.png"

const Watch: FC = () => {
    return (
        <section className="flex min-h-[400px] flex-col items-center justify-center pt-16 md:flex-row-reverse">
            <h2 className="m-0 max-w-min text-center text-4xl dark:text-white sm:text-6xl lg:text-left lg:text-8xl">
                Watch everywhere.
            </h2>
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
    )
}

export default Watch
