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
            <meta name='viewport'
                  content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.png"/>
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Freely',
    keywords: 'movie app, movie details, popular movies, upcoming movies',
    description: 'Freely offers movie details and trailers. It also includes popular movies and reviews.'
}

export default Meta;
