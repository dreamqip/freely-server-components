import type {FC} from 'react';
import {Footer} from "../layouts/MainLayout";
import {CodeIcon} from "@heroicons/react/solid";

const MainFooter: FC = () => {
    return (
        <Footer className="flex bg-inherit justify-center items-center gap-8">
            <div className="flex dark:text-white text-xl leading-8">
                <CodeIcon className="w-8 h-8 mr-2"/>
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
        </Footer>
    );
};

export default MainFooter;
