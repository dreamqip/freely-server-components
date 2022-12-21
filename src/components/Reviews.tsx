import type { FC } from 'react';
import type { IReviews } from '@/types/reviews';
import { Avatar, List } from 'antd';
import Empty from '@/components/Empty';

interface Props {
  reviews: IReviews;
}

const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <div className='py-4 md:py-10'>
      <h2 className='mb-4 text-center text-3xl font-semibold dark:text-white md:text-4xl'>
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
                    alt={item.author}
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
