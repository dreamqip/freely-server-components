'use client';

import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    const linkPathname = new URL(
      (props.as || props.href) as string,
      location.href
    ).pathname;

    const newClassName =
      linkPathname === pathname
        ? `${className} ${activeClassName}`.trim()
        : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
    // }
  }, [
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
    pathname,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
