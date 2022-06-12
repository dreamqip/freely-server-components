import type {FC} from 'react';
import Image from "next/image";
import {Header} from '../layouts/MainLayout'
import {useTheme} from "next-themes";
import Link from "next/link";
import {Drawer, Switch} from "antd";
import {MenuAlt3Icon, MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";

const MainHeader: FC = () => {
    const {theme, systemTheme, setTheme} = useTheme();
    const [visible, setVisible] = useState(false);

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
    }, [])

    const onClick = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    };

    return (
        <Header className="flex items-center justify-between bg-inherit p-0 md:px-12">
            <Link href="/">
                <div className="flex cursor-pointer items-center gap-4">
                    <Image
                        src="/movie-glass.svg"
                        alt="logo"
                        width={64}
                        height={64}
                        title="To home page"
                    />
                    <span className="text-primary-500 hidden md:block dark:text-white text-xl">Movie app</span>
                </div>
            </Link>
            <div className="flex items-center">
                <Switch
                    checkedChildren={<SunIcon className="text-yellow-500 w-4"/>}
                    unCheckedChildren={<MoonIcon className="text-gray-900 w-4"/>}
                    onClick={onClick}
                    className="mr-6"
                />
                <MenuAlt3Icon
                    className="w-10 cursor-pointer md:w-14 dark:text-primary-dark text-primary-500"
                    onClick={() => setVisible(true)}
                />
            </div>
            <Drawer
                title="Navigation"
                placement="right"
                onClose={() => setVisible(false)}
                visible={visible}
            >
                <ul className="flex flex-col items-center m-0 gap-8">
                    <li className="text-xl">
                        <Link passHref href="/">
                            <a onClick={() => setVisible(false)}
                               className="text-primary-500 transition dark:text-white dark:hover:opacity-70 hover:text-primary-700">Home</a>
                        </Link>
                    </li>
                    <li className="text-xl">
                        <Link passHref href="/soon">
                            <a onClick={() => setVisible(false)}
                               className="text-primary-500 transition dark:text-white dark:hover:opacity-70 hover:text-primary-700">Soon</a>
                        </Link>
                    </li>
                    <li className="text-xl">
                        <Link passHref href="/">
                            <a onClick={() => setVisible(false)}
                               className="text-primary-500 transition dark:text-white dark:hover:opacity-70 hover:text-primary-700">Nothing</a>
                        </Link>
                    </li>
                </ul>
            </Drawer>
        </Header>
    );
};

export default MainHeader;
