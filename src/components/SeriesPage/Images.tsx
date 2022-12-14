import type { FC } from 'react';
import type { Backdrop } from '@/types/images';
import { Image } from 'antd';
import { useAppSelector } from '@/hooks/redux';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import Empty from '@/components/Empty';

const Images: FC = () => {
  const { images } = useAppSelector((state) => state.series);

  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
      <Image.PreviewGroup>
        {images && images?.backdrops.length > 0 ? (
          images?.backdrops.map((image: Backdrop) => {
            return (
              <Image
                rootClassName='rounded-md overflow-hidden'
                className='aspect-video object-cover'
                key={image.file_path}
                placeholder
                src={`${imageBaseUrlOriginal}${image.file_path}`}
                alt='series backdrop image'
                fallback='/fallback.jpeg'
                loading='lazy'
                decoding='async'
              />
            );
          })
        ) : (
          <Empty description='No images found' />
        )}
      </Image.PreviewGroup>
    </div>
  );
};

export default Images;
