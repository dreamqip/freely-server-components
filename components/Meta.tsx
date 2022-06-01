import type {FC} from 'react'
import Head from "next/head";

interface MetaProps {
    keywords?: any;
    description?: any;
    title?: any;
}

const Meta: FC<MetaProps> = ({description, keywords, title}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>Movie app - {title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Enjoy!',
    keywords: 'movie app, free movies, popular movies',
    description: 'watch movie for free'
}

export default Meta;
