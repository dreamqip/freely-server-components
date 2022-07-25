import React from 'react';
import Link from "next/link";
import {Button} from "antd";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-6 font-black text-[120px] md:text-[220px] leading-none text-gray-700 dark:text-gray-400">404</div>
            <h1 className="text-center font-black dark:text-white text-4xl">You have found a secret place.</h1>
            <div className="max-w-[500px] dark:text-white mx-auto text-center text-xl">Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved
                to another URL.
            </div>
            <Link href="/" passHref>
                <Button className="bg-primary-500 mt-10 hover:scale-105 dark:bg-primary-dark" type={"primary"} shape={"round"} size={"large"}>Take me back to home page</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;
