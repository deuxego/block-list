import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export type UiLinkProps = {} & Parameters<typeof Link>[0]

export const UiLink = ({ className, ...props }: UiLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'p-1 text-teal-500 hover:text-teal-600 cursor-pointer'
      )}
    />
  );
};
