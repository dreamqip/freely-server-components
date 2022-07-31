import {FC} from 'react';
import Link from "next/link";
import {FilmIcon, HomeIcon, SearchIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import classNames from "classnames";

const HeaderMenu: FC = () => {
    const router = useRouter();

    const activeLink = (path: string) => {
        return classNames('link', {
            'active': router.route === path
        })
    }

    return (
        <nav className="flex items-center justify-between flex-wrap">
            <span className={activeLink('/')}>
                <Link href="/">
                    <a className="no-underline text-black dark:text-white items-center flex p-2 md:p-5">
                        <span className="flex relative">
                            <HomeIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Home</p>
                    </a>
                </Link>
            </span>
            <span className={activeLink('/search')}>
                <Link href="/search">
                    <a className="no-underline text-black dark:text-white items-center flex p-2 md:p-5">
                        <span className="flex relative">
                            <SearchIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Search</p>
                    </a>
                </Link>
            </span>
            <span className={activeLink('/movie')}>
                <Link href="/movie">
                    <a className="no-underline text-black dark:text-white flex items-center p-2 md:p-5">
                        <span className="flex relative">
                            <FilmIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Movies</p>
                    </a>
                </Link>
            </span>
            <span className={activeLink('/series')}>
                <Link href="/series">
                    <a className="no-underline text-black dark:text-white flex items-center p-2 md:p-5">
                        <span className="flex relative">
                            <VideoCameraIcon className="w-6 h-6 md:mr-2"/>
                        </span>
                        <p className="text-sm link-name relative">Series</p>
                    </a>
                </Link>
            </span>
        </nav>
    );
};

export default HeaderMenu;
