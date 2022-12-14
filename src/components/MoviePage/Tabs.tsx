import type { FC } from 'react';
import { Tabs } from 'antd';
import Images from './Images';
import Videos from './Videos';
import Overview from './Overview';

const items = [
  { label: 'Overview', key: '1', children: <Overview /> },
  { label: 'Images', key: '2', children: <Images /> },
  { label: 'Videos', key: '3', children: <Videos /> },
];

const MovieTabs: FC = () => {
  return (
    <Tabs
      className='w-full pt-10'
      defaultActiveKey='1'
      size='large'
      centered
      animated={{ inkBar: false, tabPane: true }}
      items={items}
    />
  );
};

export default MovieTabs;
