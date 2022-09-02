import 'antd/dist/antd.css';
import '@/styles/globals.css';

import {ThemeProvider} from "next-themes";
import {wrapper} from "../store";
import dynamic from "next/dynamic";
import {DefaultSeo} from "next-seo";
import SEO from "../../next-seo.config";

const MainLayout = dynamic(() => import('@/layouts/MainLayout'));
const Progress = dynamic(() => import('@/components/ProgressBar'));

function MyApp({Component, pageProps}: any) {
    return (
        <>
            <DefaultSeo {...SEO}/>
            <Progress/>
            <ThemeProvider enableSystem={true} attribute="class" forcedTheme={Component.theme || null}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </>
    )
}

export default wrapper.withRedux(MyApp);
