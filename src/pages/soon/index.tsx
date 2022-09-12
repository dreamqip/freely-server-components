import type { NextPage } from "next"

interface AboutProps {
    data?: any
}

const data = ["TV Series"]

const About: NextPage<AboutProps> = () => {
    return (
        <div className="h-full">
            <h1 className="text-center text-7xl dark:text-white">
                What&#39;s coming soon
            </h1>
            <ul className="list-decimal pl-10">
                {data.map((item: string) => {
                    return (
                        <li key={item} className="text-xl dark:text-white">
                            <strong>{item}</strong>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default About
