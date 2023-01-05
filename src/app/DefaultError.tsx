'use client';

import Button from '@/components/Button';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function DefaultError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      className='space-y-8 md:py-10 flex flex-col items-center'
      role='alert'
      aria-atomic
    >
      <h1 className='text-4xl text-center font-medium text-primary-dark'>
        Something went wrong. <br /> Please try again later.{' '}
      </h1>
      <div className='text-md text-red flex space-x-2'>
        <div aria-hidden>
          <ExclamationCircleIcon className='h-6 w-6' />
        </div>
        <strong className='font-bold'>Error:</strong>{' '}
        <span>{error.message || 'Something went wrong'}</span>
      </div>
      <div>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
