import type { FC, PropsWithChildren } from 'react';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className='flex min-h-0 flex-auto flex-col'>{children}</main>;
};

export default Main;
