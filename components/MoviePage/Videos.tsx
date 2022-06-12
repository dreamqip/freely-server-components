import React, {FC} from 'react';
import {useFetch} from "../../hooks/useFetch";
import VideoCard from "./VideoCard";

interface PageProps {
    id: any;
}

const Videos: FC<PageProps> = ({id}) => {
    const {details} = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const filteredVideos = details?.results.filter((video: any) => video.site === 'YouTube')

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredVideos?.map((video: any) => {
                return <VideoCard key={video.id} id={video.key} name={video.name} type={video.type}/>
            })}
        </div>
    );
};

export default Videos;
