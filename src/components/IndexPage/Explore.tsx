import type { FC } from 'react';
import Image from 'next/image';
import explore from '../../../public/explore.png';

const Explore: FC = () => {
  return (
    <section className='relative flex flex-col items-center justify-center pt-10 md:min-h-[400px] md:flex-row'>
      <div className='max-w-xl'>
        <h2 className='m-0 text-center text-5xl dark:text-white sm:text-6xl md:text-left lg:text-7xl xl:text-8xl'>
          Explore.
        </h2>
        <h3 className='m-0 mt-6 text-center text-2xl font-normal leading-6 tracking-widest dark:text-white md:text-left md:text-4xl'>
          Millions of movies, TV shows and people
        </h3>
      </div>
      <Image
        src={explore}
        alt='explore movies, tv shows and people from all over the world and from any device you want to'
        priority
        sizes='(min-width: 768px) 50vw, 100vw'
        width={800}
        height={400}
        className='aspect-video'
      />
    </section>
  );
};

export default Explore;
