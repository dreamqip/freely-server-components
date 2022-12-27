import type { FC } from 'react';
import type { IProfile } from '@/types/images';
import { Image } from 'antd';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import dynamic from 'next/dynamic';

const Empty = dynamic(() => import('@/components/Empty'));

interface ImageListProps {
  images: IProfile[];
}

const ProfileImageList: FC<ImageListProps> = ({ images }) => {
  return (
    <div>
      <h2 className='mb-4 text-center text-3xl font-semibold dark:text-white md:text-4xl'>
        Profile Images ({images.length})
      </h2>
      {images && images.length > 0 ? (
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
      ) : (
        <Empty description='No images found' />
      )}
    </div>
  );
};

export default ProfileImageList;
