import Document, { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="apple-touch-icon"
                        href="/icons/icon-192x192.png"
                    />
                    <meta name="theme-color" content="#6200EE" />
                    <Script
                        id="google-analytics"
                        src="https://www.googletagmanager.com/gtag/js?id=G-3FTM4H2WDP"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                
                                gtag('config', 'G-3FTM4H2WDP');
                          `,
                        }}
                    ></Script>
                </Head>
                <body className="pt-[62px] dark:bg-dark-theme">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
