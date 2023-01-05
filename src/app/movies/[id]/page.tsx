import Hero from '@/components/ShowHero';
import Storyline from '@/components/Storyline';
import dynamic from 'next/dynamic';
import { getMovieById } from '@/services/themoviedb';
import { notFound } from 'next/navigation';
import { use } from 'react';

const Tabs = dynamic(() => import('@/components/Tabs'), {
  ssr: false,
});
export default function Page({ params }: { params: { id: string } }) {
  const movie = use(getMovieById(Number(params.id), { cache: 'no-cache' }));

  if (!movie) {
    notFound();
    return null;
  }

  return (
    <article className='flex flex-col h-full flex-1'>
      <Hero series={movie} />
      <Storyline series={movie} />
      <Tabs series={movie} type='movie' />
    </article>
  );
}
