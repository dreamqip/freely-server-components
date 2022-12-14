import type { FC } from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';

const MainFooter: FC = () => {
  return (
    <footer className='flex flex-0-auto items-center justify-center gap-8 bg-inherit py-6 px-12'>
      <div className='flex text-xl leading-8 dark:text-white'>
        <CodeBracketIcon className='mr-2 h-8 w-8' />
        by
        <a
          className='ml-2 text-primary-500 underline dark:text-primary-dark'
          href='https://github.com/dreamqip'
          target='_blank'
          rel='noreferrer'
        >
          dreamqip
        </a>
      </div>
    </footer>
  );
};

export default memo(MainFooter);
