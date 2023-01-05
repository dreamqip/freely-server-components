'use client';

import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import dynamic from 'next/dynamic';
import VideoCard from '@/components/VideoCard';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Empty = dynamic(() => import('@/components/Empty'));

const Videos: FC = () => {
  const {
    series: { videos: seriesVideos },
    movie: { videos: movieVideos },
  } = useAppSelector((state) => state);
  const filteredVideos =
    seriesVideos?.results.filter((video) => video.site === 'YouTube') ||
    movieVideos?.results.filter((video) => video.site === 'YouTube');

  if (filteredVideos && filteredVideos.length === 0)
    return <Empty description='No videos found' />;

  return (
    <div className='grid grid-cols-1 gap-8 pb-4 sm:grid-cols-2 md:grid-cols-4 md:pb-10'>
      {filteredVideos?.map((video) => {
        return (
          <VideoCard
            key={video.id}
            id={video.key}
            name={video.name}
            type={video.type}
          />
        );
      })}
    </div>
  );
};

export default Videos;
