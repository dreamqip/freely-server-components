import React, {FC} from 'react';
import {Tabs} from "antd";
import Overview from "./Overview";
import {IMovie} from "../../types/IMovie";
import {parseMovieDetails} from "../../utilities/parseMovieDetails";
import Images from "./Images";
import Videos from "./Videos";

const {TabPane} = Tabs;

interface PageProps {
    movie: IMovie;
    id: any;
}

const MovieTabs: FC<PageProps> = ({movie, id}) => {
    const parsedDetails = parseMovieDetails(movie);

    return (
        <Tabs className="w-full" defaultActiveKey="1" size="large" centered>
            <TabPane tab="Overview" key="1">
                <Overview movieDetails={movie} details={parsedDetails} />
            </TabPane>
            <TabPane tab="Images" key="2">
                <Images id={id}/>
            </TabPane>
            <TabPane tab="Videos" key="3">
                <Videos id={id}/>
            </TabPane>
        </Tabs>
    );
};

export default MovieTabs;
