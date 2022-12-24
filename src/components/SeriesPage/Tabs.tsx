import type { FC } from 'react';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';
import s from '@/styles/tabs.module.css';

const OverviewTab = dynamic(() => import('@/components/SeriesPage/Overview'), {
  loading: () => <Spinner />,
});
const ImagesTab = dynamic(() => import('@/components/SeriesPage/Images'), {
  loading: () => <Spinner />,
});
const VideosTab = dynamic(() => import('@/components/SeriesPage/Videos'), {
  loading: () => <Spinner />,
});

const Tabs: FC = () => {
  return (
    <>
      <Root className='flex w-full flex-col' defaultValue='overview'>
        <List
          className='flex w-full flex-row items-center justify-center gap-x-6 py-6'
          aria-label='tabs example'
        >
          <Trigger value='overview' asChild>
            <div className={s.trigger}>
              <span>Overview</span>
            </div>
          </Trigger>
          <Trigger value='images' asChild>
            <div className={s.trigger}>
              <span>Images</span>
            </div>
          </Trigger>
          <Trigger value='videos' asChild>
            <div className={s.trigger}>
              <span>Videos</span>
            </div>
          </Trigger>
        </List>
        <Content forceMount value='overview' className={s.content}>
          <OverviewTab />
        </Content>
        <Content forceMount value='images' className={s.content}>
          <ImagesTab />
        </Content>
        <Content forceMount value='videos' className={s.content}>
          <VideosTab />
        </Content>
      </Root>
    </>
  );
};

export default Tabs;
