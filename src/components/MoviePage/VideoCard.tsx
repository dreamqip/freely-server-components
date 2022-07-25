import {FC} from 'react';
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface PageProps {
    id: string;
    type: string;
    name: string;
}

const VideoCard: FC<PageProps> = ({id, type, name}) => {
    return (
        <div className="relative">
            <LiteYouTubeEmbed
                id={id}
                title={name}
            />
            <div className="text-lg mt-4 dark:text-white">{name}</div>
            <div className="text-md text-gray-500">{type}</div>
        </div>
    );
};

export default VideoCard;
