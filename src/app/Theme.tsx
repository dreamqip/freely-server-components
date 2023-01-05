'use client';

import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { useIsShowPage } from '@/hooks/useIsShowPage';

const Theme: FC<PropsWithChildren> = ({ children }) => {
  const isForceToDark = useIsShowPage();

  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'
      forcedTheme={isForceToDark ? 'dark' : undefined}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
