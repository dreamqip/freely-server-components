import type {FC} from 'react';
import {memo, useEffect, useState} from "react";
import Image from "next/image";
import {Header} from '@/layouts/MainLayout'
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";
import HeaderMenu from "@/components/Header/Menu";
import SwitchButton from "@/components/Header/SwitchButton";
import {useTheme} from "next-themes";

const MainHeader: FC = () => {
    const router = useRouter();
    const [logoSrc, setLogoSrc] = useState<string>("/logo-white.webp");
    const {theme, forcedTheme} = useTheme();

    const headerClasses = classNames("flex absolute px-4 z-[100] inset-0 items-center justify-between md:px-12 w-full", {
        'bg-transparent': router.route !== '/',
        'bg-inherit': router.route === '/',
    })

    useEffect(() => {
        if (theme || forcedTheme === 'dark') {
            setLogoSrc("/logo-dark.webp");
        } else {
            setLogoSrc("/logo-white.webp");
        }
    }, [theme, forcedTheme]);

    return (
        <Header
            className={headerClasses}>
            <div className="flex cursor-pointer items-center gap-4 md:gap-10">
                <Link href="/" passHref>
                    <a className="items-center flex">
                        <Image
                            src={logoSrc}
                            priority={true}
                            alt="logo"
                            width={48}
                            height={48}
                            title="To home page"
                        />
                    </a>
                </Link>
                <HeaderMenu/>
            </div>
            <div className="flex items-center">
                <SwitchButton />
            </div>
        </Header>
    );
};

export default memo(MainHeader);
