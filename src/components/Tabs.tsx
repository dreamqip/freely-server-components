import { FC, ReactElement, useState } from 'react';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import s from '@/styles/tabs.module.css';

interface ActiveState {
  overview: true | undefined;
  images: true | undefined;
  videos: true | undefined;
}

interface TabsProps {
  overview: ReactElement;
  images: ReactElement;
  videos: ReactElement;
}

const Tabs: FC<TabsProps> = ({ overview, images, videos }) => {
  const [isActivated, setIsActivated] = useState<ActiveState>({
    overview: true,
    images: undefined,
    videos: undefined,
  });
  const handleTabChange = (value: string) => {
    if (value === 'images') {
      setIsActivated((prevState) => ({
        ...prevState,
        images: true,
      }));
    } else if (value === 'videos') {
      setIsActivated((prevState) => ({
        ...prevState,
        videos: true,
      }));
    }
  };

  return (
    <>
      <Root
        onValueChange={handleTabChange}
        className='flex w-full flex-col'
        defaultValue='overview'
      >
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
          {overview}
        </Content>
        <Content
          forceMount={isActivated.images}
          value='images'
          className={s.content}
        >
          {images}
        </Content>
        <Content
          forceMount={isActivated.videos}
          value='videos'
          className={s.content}
        >
          {videos}
        </Content>
      </Root>
    </>
  );
};

export default Tabs;
