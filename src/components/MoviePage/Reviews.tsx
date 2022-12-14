import type { FC } from 'react';
import { Avatar, List } from 'antd';
import { useAppSelector } from '@/hooks/redux';
import Empty from '@/components/Empty';

const Reviews: FC = () => {
  const { reviews } = useAppSelector((state) => state.movie);

  return (
    <div className='relative'>
      <h2 className='mt-4 text-center text-2xl font-bold dark:text-white md:text-5xl'>
        Reviews
      </h2>
      {reviews && reviews.results.length > 0 ? (
        <List
          itemLayout={'vertical'}
          dataSource={reviews.results}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                description={
                  <p className='w-52 dark:text-white xs:w-auto'>
                    {item.content}
                  </p>
                }
                title={
                  <span className='dark:text-primary-dark'>{item.author}</span>
                }
                avatar={
                  <Avatar
                    src={`https://ui-avatars.com/api/?rounded=true&name=${item.author}&background=random`}
                  />
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty description='No reviews found' />
      )}
    </div>
  );
};

export default Reviews;
