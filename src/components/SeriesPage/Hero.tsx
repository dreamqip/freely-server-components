import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux';
import { LazyMotion, m, useMotionValue, useScroll } from 'framer-motion';
import { animationVariants } from '@/utilities/animationVariants';
import { PlayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const loadFeatures = () =>
  import('../Animated/DomAnimation').then((res) => res.default);

const Hero: FC = () => {
  const { series } = useAppSelector((state) => state.series);
  const [imgSrc, setImgSrc] = useState(
    `https://image.tmdb.org/t/p/original${series?.backdrop_path}`
  );
  const [loaded, setLoaded] = useState(false);
  const [loadedLogo, setLoadedLogo] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useMotionValue(1);

  useEffect(() => {
    setImgSrc(`https://image.tmdb.org/t/p/original${series?.backdrop_path}`);
    setLoaded(false);
    setLoadedLogo(false);
  }, [series]);

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      const newProgress = Math.max(1 - 8 * progress, 0.2);
      scrollProgress.set(newProgress);
    });

    return () => scrollYProgress.clearListeners();
  }, [scrollProgress, scrollYProgress]);

  return (
    <>
      <LazyMotion features={loadFeatures}>
        <m.div
          initial='hidden'
          animate={loaded ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ ease: 'easeOut', duration: 1.25 }}
          className='absolute inset-0 z-0 max-h-[300px] w-full select-none sm:fixed sm:max-h-full'
          style={{ opacity: scrollProgress }}
        >
          {series && (
            <Image
              src={imgSrc}
              alt={series.name}
              fill
              className='object-cover'
              onError={() => setImgSrc('/fallback.jpeg')}
              onLoad={() => setLoaded(false)}
              onLoadingComplete={() => setLoaded(true)}
            />
          )}
          <div className='radial-gradient absolute inset-0 z-0 h-full'></div>
        </m.div>
      </LazyMotion>

      <div className='relative'>
        <div className='max-w-xl'>
          {series?.images?.logos && series?.images?.logos.length > 0 ? (
            <div className='py-6'>
              <LazyMotion features={loadFeatures}>
                <m.div
                  initial='hidden'
                  animate={loadedLogo ? 'visible' : 'hidden'}
                  variants={animationVariants}
                  transition={{
                    ease: 'easeOut',
                    duration: 1,
                  }}
                  className='relative min-h-[100px] max-w-[180px] md:min-h-[170px] md:max-w-[341px]'
                >
                  <Image
                    alt={series?.name}
                    fill
                    className='object-contain object-center'
                    src={`https://image.tmdb.org/t/p/original${series?.images?.logos[0].file_path}`}
                    onLoad={() => setLoaded(false)}
                    onLoadingComplete={() => setLoadedLogo(true)}
                  />
                </m.div>
              </LazyMotion>
            </div>
          ) : (
            <h1 className='m-0 py-6 text-2xl text-white md:py-10 md:text-5xl'>
              {series?.name}
            </h1>
          )}
          <span className='hidden text-lg font-medium text-white md:block'>
            {series?.overview?.substring(0, 150) + '...'}
          </span>
          <div className='my-4 font-light tracking-widest text-white'>
            {series?.number_of_seasons}{' '}
            {series && series.number_of_seasons > 1 ? 'Seasons' : 'Season'}
          </div>
          <div className='my-4 leading-6 tracking-widest text-white'>
            {series?.genres?.map((genre) => genre.name).join(', ')}
          </div>
          <Link
            href={{
              pathname: '/room/[id]',
              query: { type: 'series', id: series?.id },
            }}
          >
            <button className='play-btn'>
              <PlayIcon className='h-10 w-10 fill-current' />
              <span className='ml-2'>play</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
