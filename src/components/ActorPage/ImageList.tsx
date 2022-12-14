import type { FC } from 'react';
import type { IProfile } from '@/types/images';
import { Image } from 'antd';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import Empty from '@/components/Empty';

interface ImageListProps {
  images: IProfile[];
}

const ImageList: FC<ImageListProps> = ({ images }) => {
  if (!images) {
    return <Empty description='No images found' />;
  }

  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <Image.PreviewGroup>
        {images &&
          images.map((image) => {
            return (
              <Image
                key={image.file_path}
                placeholder
                rootClassName='rounded-md overflow-hidden'
                className='aspect-[2/3]'
                src={`${imageBaseUrlOriginal}${image.file_path}`}
                alt='actor image'
                fallback='./fallback.jpeg'
                loading='lazy'
                decoding='async'
              />
            );
          })}
      </Image.PreviewGroup>
    </div>
  );
};

export default ImageList;
