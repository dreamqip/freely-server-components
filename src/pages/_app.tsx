import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'swiper/css';

import type {AppProps, NextWebVitalsMetric} from 'next/app'
import {ThemeProvider} from "next-themes";
import {Provider} from "react-redux";
import {store} from "../store";
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('../layouts/MainLayout'))

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//     if (metric.label === 'web-vital') {
//         console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
//     }
// }

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider enableSystem={true} attribute="class">
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp;
