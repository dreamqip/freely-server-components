import type { FC } from 'react';
import Image from 'next/image';
import devices from '../../../public/devices.png';

const Watch: FC = () => {
  return (
    <section className='flex min-h-[400px] flex-col items-center justify-center pt-16 md:flex-row-reverse'>
      <h2 className='m-0 text-center text-5xl dark:text-white sm:text-6xl lg:text-left lg:text-7xl xl:text-8xl'>
        Watch everywhere.
      </h2>
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
