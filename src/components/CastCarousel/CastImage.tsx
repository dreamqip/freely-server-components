import type { IMovieCast, ITvShowCast } from '@/types/cast';
import type { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '@/utilities/animationVariants';
import ImageWithFallback from '@/components/Image';
import { imageBaseUrlW400 } from '@/services/themoviedb';

interface Props {
  path: IMovieCast | ITvShowCast;
}

const CastImage: FC<Props> = ({ path }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial='hidden'
      animate={loaded ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ ease: 'easeOut', duration: 1.25 }}
      className='overflow-hidden rounded-md'
    >
      <ImageWithFallback
        src={`${imageBaseUrlW400}${path.profile_path}`}
        width={400}
        height={600}
        sizes='(max-width: 320px) 33vw, (max-width: 568px) 25vw, (max-width: 1024px) 15vw, (max-width: 1440px) 10vw, (max-width: 1920px) 8vw, 7vw'
        className='aspect-[2/3] object-cover'
        alt={path.name}
        onLoadingComplete={() => setLoaded(true)}
      />
    </motion.div>
  );
};

export default CastImage;
