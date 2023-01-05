import type { FC } from 'react';
import type { Backdrop } from '@/types/images';
import { useAppSelector } from '@/hooks/redux';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import dynamic from 'next/dynamic';

const Empty = dynamic(() => import('@/components/Empty'));
const AntdImagePreview = dynamic(
  () => import('antd').then((m) => m.Image.PreviewGroup),
  { ssr: false }
);
const AntdImage = dynamic(() => import('antd').then((m) => m.Image), {
  ssr: false,
});

const Images: FC = () => {
  const { images } = useAppSelector((state) => state.series);

  return (
    <>
      {images && images.backdrops.length > 0 ? (
        <div className='grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 md:grid-cols-4 md:py-10'>
          <AntdImagePreview>
            {images?.backdrops.map((image: Backdrop) => (
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

export default Images;
