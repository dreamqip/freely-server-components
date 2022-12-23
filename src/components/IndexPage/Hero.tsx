import type { FC } from 'react';
import Image from 'next/image';
import wanda from '../../../public/wanda.jpeg';

const Hero: FC = () => {
  return (
    <div className='flex flex-col items-center justify-between md:flex-row'>
      <h1
        aria-label='Movie change the world'
        className='flex flex-col text-center pt-20 md:p-0 text-7xl font-extrabold leading-none tracking-tighter dark:text-white md:text-left md:text-8xl xl:text-9xl'
      >
        <span className='heading-line heading-line-first'>
          <span className='heading-line-gradient'>Movie</span>
        </span>
        <span className='heading-line heading-line-second'>
          <span className='heading-line-gradient'>Change</span>
        </span>
        <span className='heading-line heading-line-third'>
          <span className='heading-line-gradient'>The world</span>
        </span>
      </h1>
      <Image
        src={wanda}
        alt='Wanda Maximoff from MCU'
        sizes='(max-width: 768px) 0vw, 50vw'
        width={400}
        height={600}
        placeholder='blur'
        priority
        className='hidden rounded-tr-full rounded-bl-full md:block'
      />
    </div>
  );
};

export default Hero;
