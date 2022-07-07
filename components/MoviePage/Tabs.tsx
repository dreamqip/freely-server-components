import {FC} from 'react';
import {Tabs} from "antd";
import Overview from "./Overview";
import {IMovie} from "../../types/movie";
import {parseMovieDetails} from "../../utilities/parseMovieDetails";
import Images from "./Images";
import Videos from "./Videos";
import {useAppSelector} from "../../hooks/redux";

const {TabPane} = Tabs;

const MovieTabs: FC = () => {

    return (
        <Tabs className="w-full" defaultActiveKey="1" size="large" centered>
            <TabPane tab="Overview" key="1">
                <Overview />
            </TabPane>
            <TabPane tab="Images" key="2">
                <Images />
            </TabPane>
            <TabPane tab="Videos" key="3">
                <Videos />
            </TabPane>
        </Tabs>
    );
};

export default MovieTabs;
