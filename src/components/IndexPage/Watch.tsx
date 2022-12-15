import type { FC } from 'react';
import Image from 'next/image';
import devices from '../../../public/devices.png';

const Watch: FC = () => {
  return (
    <section className='flex flex-col items-center justify-center pt-16 md:min-h-[400px] md:flex-row-reverse'>
      <div className='max-w-xl'>
        <h2 className='m-0 text-center text-4xl dark:text-white sm:text-5xl lg:text-left lg:text-6xl xl:text-7xl'>
          Watch everywhere.
        </h2>
        <h3 className='m-0 mt-6 text-center text-xl tracking-tight dark:text-white md:text-left md:text-3xl'>
          Stream unlimited movies and TV shows on your phone, tablet, or laptop.
        </h3>
      </div>
      <Image
        src={devices}
        alt='watch everywhere and from any device you want to'
        width={600}
        height={400}
        sizes='(min-width: 768px) 50vw, 100vw'
        className='aspect-[4/3]'
      />
    </section>
  );
};

export default Watch;
