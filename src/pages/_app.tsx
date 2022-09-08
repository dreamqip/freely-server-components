import 'antd/dist/antd.css';
import '@/styles/globals.css';

import type {AppProps as NextAppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import {wrapper} from "../store";
import dynamic from "next/dynamic";
import {DefaultSeo} from "next-seo";
import SEO from "../../next-seo.config";

const MainLayout = dynamic(() => import('@/layouts/MainLayout'));
const Progress = dynamic(() => import('@/components/ProgressBar'));

type AppProps<P = any> = {
    Component: NextAppProps<P>['Component'] & { theme?: string };
} & P;

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <DefaultSeo {...SEO}/>
            <Progress/>
            <ThemeProvider enableSystem={true} attribute="class" forcedTheme={pageProps.theme || null}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </>
    )
}

export default wrapper.withRedux(MyApp);
