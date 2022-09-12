import type { FC } from "react"
import {
    FilmIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/solid"
import ActiveLink from "@/components/ActiveLink"

const HeaderMenu: FC = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between">
            <span className="link">
                <ActiveLink href="/" activeClassName="active" passHref>
                    <a className="flex items-center p-2 text-black no-underline dark:text-white md:p-5">
                        <span className="relative flex">
                            <HomeIcon className="h-6 w-6 md:mr-2" />
                        </span>
                        <p className="link-name relative text-sm">Home</p>
                    </a>
                </ActiveLink>
            </span>
            <span className="link">
                <ActiveLink href="/search" activeClassName="active" passHref>
                    <a className="flex items-center p-2 text-black no-underline dark:text-white md:p-5">
                        <span className="relative flex">
                            <MagnifyingGlassIcon className="h-6 w-6 md:mr-2" />
                        </span>
                        <p className="link-name relative text-sm">Search</p>
                    </a>
                </ActiveLink>
            </span>
            <span className="link">
                <ActiveLink href="/movie" activeClassName="active" passHref>
                    <a className="flex items-center p-2 text-black no-underline dark:text-white md:p-5">
                        <span className="relative flex">
                            <FilmIcon className="h-6 w-6 md:mr-2" />
                        </span>
                        <p className="link-name relative text-sm">Movies</p>
                    </a>
                </ActiveLink>
            </span>
            <span className="link">
                <ActiveLink href="/series" activeClassName="active" passHref>
                    <a className="flex items-center p-2 text-black no-underline dark:text-white md:p-5">
                        <span className="relative flex">
                            <VideoCameraIcon className="h-6 w-6 md:mr-2" />
                        </span>
                        <p className="link-name relative text-sm">Series</p>
                    </a>
                </ActiveLink>
            </span>
        </nav>
    )
}

export default HeaderMenu
