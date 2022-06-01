import '../styles/globals.css'
import 'antd/dist/antd.css'
import "swiper/css/bundle";

import type {AppProps} from 'next/app'
import MainLayout from "../layouts/MainLayout";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )
}

export default MyApp
