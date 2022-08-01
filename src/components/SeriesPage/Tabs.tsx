import {FC} from 'react';
import {Tabs} from "antd";
import Overview from "./Overview";
import Images from "./Images";
import Videos from "./Videos";

const {TabPane} = Tabs;

const SeriesTabs: FC = () => {
    return (
        <Tabs className="w-full pt-10" defaultActiveKey="1" size="large" centered>
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

export default SeriesTabs;
