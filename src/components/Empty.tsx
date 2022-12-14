import type { FC, PropsWithChildren } from 'react';
import { Empty as AntdEmpty, EmptyProps } from 'antd';

const Empty: FC<PropsWithChildren<EmptyProps>> = ({
  children,
  description = 'No data found',
  image = AntdEmpty.PRESENTED_IMAGE_SIMPLE,
}) => {
  return (
    <AntdEmpty
      description={
        <h2 className='text-center text-2xl font-medium dark:text-white'>
          {description}
        </h2>
      }
      image={image}
    >
      {children}
    </AntdEmpty>
  );
};

export default Empty;
