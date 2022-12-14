import Image, { ImageProps } from 'next/image';
import type { FC, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import fallbackImage from '../../public/fallback.jpeg';

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src'];
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}) => {
  const [error, setError] = useState<SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
