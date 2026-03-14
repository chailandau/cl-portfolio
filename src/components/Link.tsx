import type { ComponentProps } from 'react';
import { Link as RouterLink } from '@tanstack/react-router';
import { cn } from '@/lib/utils/cn';

type Props = Omit<ComponentProps<typeof RouterLink>, 'children' | 'className' | 'to'> & {
  children: React.ReactNode;
  className?: string;
  to: string;
  /** Show arrow (e.g. on mobile menu) */
  icon?: boolean;
  /** Row layout: underline + arrow always visible, hover fill like social links */
  row?: boolean;
};

export function Link({ className, children, icon = false, row = false, ...props }: Props) {
  const content = (
    <>
      <span className="link-underline-text">{children}</span>
      {icon && (
        <span className="link-underline-icon" aria-hidden>
          {'>'}
        </span>
      )}
    </>
  );

  return (
    <RouterLink
      className={cn(
        'link-underline',
        row && 'link-underline--row font-medium',
        className,
      )}
      {...props}
    >
      {row && icon ? (
        <span className="link-underline-row-content">{content}</span>
      ) : (
        content
      )}
    </RouterLink>
  );
}
