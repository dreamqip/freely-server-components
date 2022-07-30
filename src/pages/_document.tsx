import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap"
                          rel="stylesheet"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/icons/icon-192x192.png"/>
                    <meta name="theme-color" content="#6200EE"/>
                </Head>
                <body className="font-rubik dark:bg-dark-theme pt-[62px]">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }

}

export default MyDocument;
