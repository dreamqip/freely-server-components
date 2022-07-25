import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'swiper/css';
import 'nprogress/nprogress.css';

import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {wrapper} from "../store";
import NProgress from 'nprogress';
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {useEffect} from "react";

const MainLayout = dynamic(() => import('../layouts/MainLayout'))

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    NProgress.configure({
        showSpinner: false,
    })

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);

        return () => {
            router.events.off("routeChangeStart", handleRouteStart);
            router.events.off("routeChangeComplete", handleRouteDone);
            router.events.off("routeChangeError", handleRouteDone);
        };
    }, []);

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(MyApp);
