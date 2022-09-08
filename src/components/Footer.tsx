import type {FC} from 'react';
import {CodeBracketIcon} from "@heroicons/react/24/solid";
import {memo} from "react";

const MainFooter: FC = () => {
    return (
        <footer className="flex bg-inherit justify-center items-center gap-8 py-6 px-12 flex-0-auto">
            <div className="flex dark:text-white text-xl leading-8">
                <CodeBracketIcon className="w-8 h-8 mr-2"/>
                by
                <a
                    className="ml-2 underline text-primary-500 dark:text-primary-dark"
                    href="https://github.com/dreamqip"
                    target="_blank"
                    rel="noreferrer"
                >
                    dreamqip
                </a>
            </div>
        </footer>
    );
};

export default memo(MainFooter);
