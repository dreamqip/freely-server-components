import Link from "next/link"
import { Button } from "antd"
import { NextPage } from "next"

const Error: NextPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-6 text-center text-[120px] font-black leading-none text-gray-700 dark:text-gray-400 md:text-[220px]">
                404
            </div>
            <h1 className="text-center text-4xl font-black dark:text-white">
                You have found a secret place.
            </h1>
            <div className="mx-auto max-w-[500px] text-center text-xl dark:text-white">
                Unfortunately, this is only a 404 page. You may have mistyped
                the address, or the page has been moved to another URL.
            </div>
            <Link href="/" passHref>
                <Button
                    className="mt-10 bg-primary-500 hover:scale-105 dark:bg-primary-dark"
                    type={"primary"}
                    shape={"round"}
                    size={"large"}
                >
                    Take me back to home page
                </Button>
            </Link>
        </div>
    )
}

export default Error
