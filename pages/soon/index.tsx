import React from 'react';
import type {NextPage} from "next";
import axios from "axios";
import {Divider, List, Typography} from "antd";

interface AboutProps {
    data?: any
}

const data = [
    'Search movies',
    'Movie recommendations'
]

const About: NextPage<AboutProps> = () => {

    return (
        <div>
            <h1 className="text-7xl text-center dark:text-white">What's coming soon</h1>
            <List
                dataSource={data}
                renderItem={(item: string) => (
                    <List.Item>
                        <Typography.Text strong className="dark:text-white text-3xl">{item}</Typography.Text>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default About;

/*export async function getServerSideProps() {
    const data = await axios.get(
        'https://api.themoviedb.org/3/movie/634649/recommendations?api_key=5648f9659b3ae8a99d81df8a941d325e&language=en-US&page=1'
    )
        .then(res => res.data)

    return {
        props: {
            data
        }
    }
}*/
