import type {FC} from 'react';
import {memo} from "react";
import Image from "next/image";
import {Header} from '@/layouts/MainLayout'
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";
import HeaderMenu from "@/components/Header/Menu";
import SwitchButton from "@/components/Header/SwitchButton";

const MainHeader: FC = () => {
    const router = useRouter();

    const headerClasses = classNames("flex absolute px-4 z-[100] inset-0 items-center justify-between md:px-12 w-full", {
        'bg-transparent': router.route !== '/',
        'bg-inherit': router.route === '/',
    })

    return (
        <Header
            className={headerClasses}>
            <div className="flex cursor-pointer items-center gap-4 md:gap-10">
                <Link href="/" passHref>
                    <a className="items-center flex">
                        <Image
                            src="/logo.png"
                            priority={true}
                            quality={100}
                            alt="logo"
                            width={48}
                            height={48}
                            title="To home page"
                            className="h-full w-full"
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
