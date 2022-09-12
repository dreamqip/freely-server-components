import { FC } from "react"
import VideoCard from "../MoviePage/VideoCard"
import { Empty } from "antd"
import { useAppSelector } from "@/hooks/redux"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const Videos: FC = () => {
    const { videos } = useAppSelector((state) => state.series)
    const filteredVideos = videos?.results.filter(
        (video: any) => video.site === "YouTube"
    )

    if (!filteredVideos) return <Empty />

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {filteredVideos?.map((video: any) => {
                return (
                    <VideoCard
                        key={video.id}
                        id={video.key}
                        name={video.name}
                        type={video.type}
                    />
                )
            })}
        </div>
    )
}

export default Videos
