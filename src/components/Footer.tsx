import type { FC } from 'react';
import { GithubFilled } from '@ant-design/icons';

const MainFooter: FC = () => {
  return (
    <footer className='flex flex-0-auto items-center justify-center gap-8 bg-inherit py-6 px-12'>
      <div className='flex text-xl leading-8 dark:text-white'>
        <a
          href='https://github.com/dreamqip/freely'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2'
        >
          <GithubFilled className='text-4xl' />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;
