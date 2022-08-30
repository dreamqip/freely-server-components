import '@/styles/globals.css';
import 'antd/dist/antd.css';
import 'swiper/css';

import {ThemeProvider} from "next-themes";
import {wrapper} from "../store";
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('@/layouts/MainLayout'));
const Progress = dynamic(() => import('@/components/ProgressBar'));

function MyApp({Component, pageProps}: any) {
    return (
        <>
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
