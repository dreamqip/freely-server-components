import type { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import dynamic from 'next/dynamic';

const Empty = dynamic(() => import('@/components/Empty'));
const AntdImagePreview = dynamic(() =>
  import('antd').then((m) => m.Image.PreviewGroup)
);
const AntdImage = dynamic(() => import('antd').then((m) => m.Image));

const ImagesTab: FC = () => {
  const {
    series: { images: seriesImages },
    movie: { images: movieImages },
  } = useAppSelector((state) => state);
  const condition =
    (seriesImages && seriesImages?.backdrops.length > 0) ||
    (movieImages && movieImages?.backdrops.length > 0);

  return (
    <>
      {condition ? (
        <div className='grid grid-cols-1 gap-6 pb-4 sm:grid-cols-2 md:grid-cols-4 md:pb-10'>
          <AntdImagePreview>
            {seriesImages?.backdrops.map((image) => (
              <AntdImage
                className='aspect-video object-cover'
                key={image.file_path}
                placeholder
                src={`${imageBaseUrlOriginal}${image.file_path}`}
                alt='series backdrop image'
                fallback='/fallback.jpeg'
                loading='lazy'
                decoding='async'
              />
            )) ||
              movieImages?.backdrops.map((image) => (
                <AntdImage
                  className='aspect-video object-cover'
                  key={image.file_path}
                  placeholder
                  src={`${imageBaseUrlOriginal}${image.file_path}`}
                  alt='series backdrop image'
                  fallback='/fallback.jpeg'
                  loading='lazy'
                  decoding='async'
                />
              ))}
          </AntdImagePreview>
        </div>
      ) : (
        <Empty description='No images found' />
      )}
    </>
  );
};

export default ImagesTab;
