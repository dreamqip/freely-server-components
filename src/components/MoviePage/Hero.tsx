import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { LazyMotion, m, useMotionValue, useScroll } from 'framer-motion';
import { animationVariants } from '@/utilities/animationVariants';
import { PlayIcon } from '@heroicons/react/24/solid';
import { loadFeatures } from '@/utilities/loadAnimationFeatures';
import { imageBaseUrlOriginal } from '@/services/themoviedb';
import ImageWithFallback from '@/components/Image';

const Hero: FC = () => {
  const { movie } = useAppSelector((state) => state.movie);
  const [loaded, setLoaded] = useState(false);
  const [loadedLogo, setLoadedLogo] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useMotionValue(1);

  useEffect(() => {
    setLoaded(false);
    setLoadedLogo(false);
  }, [movie]);

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      const newProgress = Math.max(1 - 8 * progress, 0.2);
      scrollProgress.set(newProgress);
    });

    return () => scrollYProgress.clearListeners();
  }, [scrollProgress, scrollYProgress]);

  return (
    <>
      {movie && (
        <LazyMotion strict features={loadFeatures}>
          <m.div
            initial='hidden'
            animate={loaded ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
            className='pointer-events-none fixed inset-0 z-0 h-screen select-none overflow-hidden'
            style={{ opacity: scrollProgress }}
          >
            <ImageWithFallback
              src={`${imageBaseUrlOriginal}${movie.backdrop_path}`}
              alt={movie.title}
              fill
              priority
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, (max-width: 1920px) 25vw, 20vw'
              className='aspect-video object-cover object-top'
              onLoadingComplete={() => setLoaded(true)}
            />
            <div className='absolute inset-0 z-0 h-full bg-radial-gradient'></div>
          </m.div>
        </LazyMotion>
      )}
      <div className='relative'>
        <div className='max-w-xl'>
          {movie?.images?.logos && movie.images.logos.length > 0 ? (
            <div className='py-6'>
              <LazyMotion features={loadFeatures}>
                <m.div
                  initial='hidden'
                  animate={loadedLogo ? 'visible' : 'hidden'}
                  variants={animationVariants}
                  className='relative min-h-[100px] max-w-[180px] md:min-h-[170px] md:max-w-[341px]'
                >
                  <ImageWithFallback
                    alt={movie.title}
                    priority
                    fill
                    sizes='(max-width: 640px) 180px, (max-width: 768px) 341px, 341px'
                    className='object-contain object-center'
                    src={`${imageBaseUrlOriginal}${movie?.images?.logos[0].file_path}`}
                    onLoadingComplete={() => setLoadedLogo(true)}
                  />
                </m.div>
              </LazyMotion>
            </div>
          ) : (
            <h1 className='m-0 py-6 text-2xl text-white md:py-10 md:text-5xl'>
              {movie?.title}
            </h1>
          )}
          <div className='my-4 leading-6 tracking-widest text-white'>
            {movie?.genres?.map((genre) => genre.name).join(', ')}
          </div>
          {/*<Link*/}
          {/*  href={{*/}
          {/*    pathname: '/room/[id]',*/}
          {/*    query: { type: 'movie', id: movie?.id },*/}
          {/*  }}*/}
          {/*>*/}
          <button className='play-btn cursor-not-allowed' disabled>
            <PlayIcon className='h-10 w-10 fill-current' />
            <span className='ml-2'>play</span>
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  );
};

export default Hero;
