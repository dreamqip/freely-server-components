import classNames from 'classnames';

const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={classNames(
      'rounded-2xl bg-zinc-900/80 p-4 flex flex-col flex-1',
      {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_0.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
          isLoading,
      }
    )}
  >
    <div className='space-y-3 flex flex-col flex-1'>
      <div className='flex flex-1 rounded-lg bg-zinc-700' />
      <div className='h-14 w-11/12 rounded-lg bg-zinc-700' />
      <div className='h-6 w-8/12 rounded-lg bg-zinc-700' />
      <div className='h-6 w-1/2 rounded-lg bg-zinc-700' />
    </div>
  </div>
);

export default SkeletonCard;
