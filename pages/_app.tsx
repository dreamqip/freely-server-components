import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import 'glider-js/glider.min.css';

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

export default MyApp;
