import type {FC} from 'react'
import {BackTop, Layout} from "antd";
import Meta from "../components/Meta";
import MainHeader from "../components/Header";
import Main from "../components/Main";
import MainFooter from "../components/Footer";
import {ArrowUpIcon} from "@heroicons/react/solid";

export const {Header, Content, Footer} = Layout;

const MainLayout: FC = ({children}) => {
    return (
        <>
            <Meta />
            <Layout className="max-w-7xl px-4 mx-auto bg-inherit h-full">
                <BackTop>
                    <div className="border-primary-500 dark:border-primary-dark w-10 h-10 border-2 rounded-full">
                        <ArrowUpIcon className="text-black dark:text-white" />
                    </div>
                </BackTop>
                <MainHeader />
                <Main>
                    {children}
                </Main>
                <MainFooter />
            </Layout>
        </>
    );
};

export default MainLayout;
