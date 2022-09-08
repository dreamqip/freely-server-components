import type {FC} from 'react';
import {FilmIcon, HomeIcon, MagnifyingGlassIcon, VideoCameraIcon} from "@heroicons/react/24/solid";
import ActiveLink from "@/components/ActiveLink";

const HeaderMenu: FC = () => {

    return (
        <nav className="flex items-center justify-between flex-wrap">
            <span className="link">
                <ActiveLink href="/" activeClassName="active" passHref>
                    <a className="no-underline text-black dark:text-white items-center flex p-2 md:p-5">
                        <span className="flex relative">
                            <HomeIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Home</p>
                    </a>
                </ActiveLink>
            </span>
            <span className="link">
                <ActiveLink href="/search" activeClassName="active" passHref>
                    <a className="no-underline text-black dark:text-white items-center flex p-2 md:p-5">
                        <span className="flex relative">
                            <MagnifyingGlassIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Search</p>
                    </a>
                </ActiveLink>
            </span>
            <span className="link">
                <ActiveLink href="/movie" activeClassName="active" passHref>
                    <a className="no-underline text-black dark:text-white flex items-center p-2 md:p-5">
                        <span className="flex relative">
                            <FilmIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Movies</p>
                    </a>
                </ActiveLink>
            </span>
            <span className="link">
                <ActiveLink href="/series" activeClassName="active" passHref>
                    <a className="no-underline text-black dark:text-white flex items-center p-2 md:p-5">
                        <span className="flex relative">
                            <VideoCameraIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Series</p>
                    </a>
                </ActiveLink>
            </span>
        </nav>
    );
};

export default HeaderMenu;
