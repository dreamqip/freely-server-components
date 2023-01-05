import ShowHero from '@/components/ShowHero';
import Storyline from '@/components/Storyline';
import dynamic from 'next/dynamic';
import { getSeriesById } from '@/services/themoviedb';
import { notFound } from 'next/navigation';
import { use } from 'react';

const Tabs = dynamic(() => import('@/components/Tabs'), {
  ssr: false,
});

export default function Page({ params }: { params: { id: string } }) {
  const series = use(getSeriesById(Number(params.id), { cache: 'no-cache' }));

  if (!series) {
    notFound();
    return null;
  }

  return (
    <article className='flex flex-col h-full flex-1'>
      <ShowHero series={series} />
      <Storyline series={series} />
      <Tabs series={series} type='series' />
    </article>
  );
}
