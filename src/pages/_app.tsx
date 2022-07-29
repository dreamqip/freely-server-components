import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'swiper/css';

import type {AppProps} from 'next/app';
import {ThemeProvider} from "next-themes";
import {wrapper} from "../store";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";

const MainLayout = dynamic(() => import('../layouts/MainLayout'));

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <NextNProgress
                color="#6200EE"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                options={{
                    trickleSpeed: 100,
                    showSpinner: false,
                }}
            />
            <ThemeProvider enableSystem={true} attribute="class">
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </>
    )
}

export default wrapper.withRedux(MyApp);
