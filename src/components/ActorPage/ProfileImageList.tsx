import type { FC } from 'react';
import type { IProfile } from '@/types/images';
import { Image } from 'antd';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import Empty from '@/components/Empty';

interface ImageListProps {
  images: IProfile[];
}

const ProfileImageList: FC<ImageListProps> = ({ images }) => {
  if (!images) {
    return <Empty description='No images found' />;
  }

  return (
    <div className='grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-6'>
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

export default ProfileImageList;
