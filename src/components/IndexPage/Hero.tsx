import type { FC } from 'react';
import Image from 'next/image';
import wanda from '../../../public/wanda.jpeg';
import { Device } from '../Device';

const Hero: FC = () => {
  return (
    <div className='flex flex-col items-center justify-between pt-20 md:flex-row md:p-0'>
      <h1
        aria-label='Movie change the world'
        className='flex flex-col text-center text-7xl font-extrabold leading-none tracking-tighter dark:text-white md:text-left md:text-8xl xl:text-9xl'
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
      <Device desktop>
        <Image
          src={wanda}
          alt='Wanda Maximoff from MCU'
          width={400}
          height={600}
          placeholder='blur'
          priority
          className='rounded-tr-full rounded-bl-full'
        />
      </Device>
    </div>
  );
};

export default Hero;
