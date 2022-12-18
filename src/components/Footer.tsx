import type { FC } from 'react';
import { GithubFilled } from '@ant-design/icons';

const MainFooter: FC = () => {
  return (
    <footer className='flex flex-0-auto flex-col items-center justify-between gap-4 bg-inherit py-6 px-12 text-lg sm:flex-row sm:gap-0'>
      <div className='flex items-center'>
        powered by
        <a
          href='https://www.themoviedb.org/'
          target='_blank'
          rel='noreferrer'
          className='ml-1 text-blue-700 dark:text-blue-600'
        >
          TMDB
        </a>
      </div>
      <a
        href='https://github.com/dreamqip/freely'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-2'
      >
        <GithubFilled />
        <span>Source code</span>
      </a>
    </footer>
  );
};

export default MainFooter;
