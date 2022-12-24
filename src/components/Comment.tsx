import type { FC } from 'react';
import type { IReview } from '@/types/reviews';
import ImageWithFallback from '@/components/Image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  review: IReview;
}

const maxHeight = 60;

const Comment: FC<Props> = ({ review }) => {
  const [showMore, setShowMore] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const { offsetHeight } = contentRef.current;
      if (offsetHeight > maxHeight) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  }, []);

  const toggleShowMore = () => {
    setCollapsed((prevState) => !prevState);
    if (contentRef.current && collapsed) {
      contentRef.current?.style.setProperty('--line-clamp', 'unset');
    } else {
      contentRef.current?.style.setProperty('--line-clamp', '3');
    }
  };

  return (
    <div className='relative mb-4 flex last:mb-0'>
      <div className='mr-4'>
        <div className='h-[40px] w-[40px]'>
          <ImageWithFallback
            className='rounded-full'
            src={`https://ui-avatars.com/api/?rounded=true&name=${review.author}&background=random`}
            alt={review.author}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div>
        <h3 className='text-md font-medium dark:text-primary-dark'>
          {review.author}
        </h3>
        <div>
          <div ref={contentRef} className='text-md expander dark:text-white'>
            {review.content}
          </div>
          {showMore && (
            <button
              className='font-medium text-gray-400 hover:underline'
              onClick={toggleShowMore}
            >
              {collapsed ? 'Read more' : 'Show less'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
