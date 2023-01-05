'use client';

import type { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';

const store = makeStore();

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
