import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <div className='flex flex-1 justify-center items-center'>
      <Spinner spinnerSize={120} />
    </div>
  );
}
