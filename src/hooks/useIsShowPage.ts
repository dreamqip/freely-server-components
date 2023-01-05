import { usePathname } from 'next/navigation';

export const useIsShowPage = () => {
  const pathname = usePathname();

  return (
    pathname?.match(/\/series\/[0-9]+/) || pathname?.match(/\/movies\/[0-9]+/)
  );
};
