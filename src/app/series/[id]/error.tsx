'use client';

import DefaultError from '@/app/DefaultError';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <DefaultError error={error} reset={reset} />;
}
