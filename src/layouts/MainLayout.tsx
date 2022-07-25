import type {FC, PropsWithChildren} from 'react'
import {Layout, BackTop} from "antd";
import Meta from "../components/Meta";
import MainHeader from "../components/Header";
import Main from "../components/Main";
import MainFooter from "../components/Footer";
import {ArrowUpIcon} from "@heroicons/react/solid";
import {memo} from "react";

export const {Header, Content, Footer} = Layout;

const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Meta/>
            <Layout className="max-w-7xl px-2 md:px-4 mx-auto bg-inherit min-h-full">
                <MainHeader/>
                <Main>
                    {children}
                </Main>
                <MainFooter/>
            </Layout>
            <BackTop>
                <div className="border-primary-500 dark:border-primary-dark md:w-12 border-2 rounded-full">
                    <ArrowUpIcon className="text-black dark:text-white"/>
                </div>
            </BackTop>
        </>
    );
};

export default memo(MainLayout);
