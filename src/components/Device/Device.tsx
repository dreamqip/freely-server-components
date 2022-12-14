import type { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface DeviceProps {
  desktop?: boolean;
  mobile?: boolean;
  children: ReactElement;
}

export const Device = ({
  desktop,
  mobile,
  children,
}: DeviceProps): ReactElement | null => {
  const isDesktopOrTablet = useMediaQuery({
    minWidth: 768,
  });
  const isMobile = useMediaQuery({
    maxWidth: 568,
  });

  return (isMobile && mobile) || (isDesktopOrTablet && desktop)
    ? children
    : null;
};
