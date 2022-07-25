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
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.png" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'The Movie app',
    keywords: 'movie app, movie details, popular movies, upcoming movies',
    description: 'The Movie app offers movie details and trailers. It also includes popular movies and reviews.'
}

export default Meta;
