import {FC} from 'react';
import VideoCard from "./VideoCard";
import {Empty} from "antd";
import {useAppSelector} from "../../hooks/redux";

const Videos: FC = () => {
    const {videos} = useAppSelector(state => state.movie)
    const filteredVideos = videos?.results.filter((video: any) => video.site === 'YouTube')

    if (!filteredVideos) return <Empty/>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredVideos?.map((video: any) => {
                return <VideoCard key={video.id} id={video.key} name={video.name} type={video.type}/>
            })}
        </div>
    );
};

export default Videos;
