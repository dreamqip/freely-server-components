import type {FC} from 'react';
import {memo, useEffect, useState} from "react";
import Image from "next/image";
import {Header} from '@/layouts/MainLayout'
import {useTheme} from "next-themes";
import Link from "next/link";
import {Switch} from "antd";
import {MenuAlt3Icon, MoonIcon, SearchIcon, SunIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import classNames from "classnames";
import Sidebar from "./Sidebar";

const MainHeader: FC = () => {
    const {theme, systemTheme, setTheme} = useTheme();
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const headerClasses = classNames("flex absolute z-[100] inset-0 items-center justify-between p-0 md:px-12", {
        'bg-transparent': router.route !== '/',
        'bg-inherit': router.route === '/',
    })


    const searchClasses = classNames("w-8 cursor-pointer", {
        'text-white': router.route !== '/',
        'dark:text-primary-dark': router.route === '/',
    })

    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            switch (systemTheme) {
                case 'dark':
                    setTheme('light')
                    break
                case 'light':
                    setTheme('dark')
                    break
            }
        }
    }, [setTheme, systemTheme])

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const handleVisibleChange = (visible: boolean) => {
        setVisible(visible);
    }

    return (
        <Header
            className={headerClasses}>
            <Link href="/">
                <div className="flex cursor-pointer items-center gap-4">
                    <Image
                        src="/movie-glass.svg"
                        priority={true}
                        alt="logo"
                        width={64}
                        height={64}
                        title="To home page"
                    />
                    {router.route === '/' &&
                        <span className="text-primary-500 hidden md:block dark:text-white text-xl">Movie app</span>}
                </div>
            </Link>
            <div className="flex gap-4 items-center">
                <Link href="/search">
                    <SearchIcon className={searchClasses}/>
                </Link>
                <Switch
                    checkedChildren={<SunIcon className="text-yellow-500 w-4"/>}
                    unCheckedChildren={<MoonIcon className="text-gray-900 w-4"/>}
                    onClick={handleTheme}
                />
                <MenuAlt3Icon
                    className="w-10 cursor-pointer md:w-14 dark:text-primary-dark text-primary-500"
                    onClick={() => handleVisibleChange(true)}
                />
            </div>
            <Sidebar handleVisibleChange={handleVisibleChange} visible={visible}/>
        </Header>
    );
};

export default memo(MainHeader);
