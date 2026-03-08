import type { ComponentProps } from 'react';
import { Link as RouterLink } from '@tanstack/react-router';
import { cn } from '@/lib/utils/cn';

type Props = Omit<ComponentProps<typeof RouterLink>, 'children' | 'className' | 'to'> & {
  children: React.ReactNode;
  className?: string;
  to: string;
};

export function Link({ className, children, ...props }: Props) {
  return (
    <RouterLink
      className={cn('link-underline', className)}
      {...props}
    >
      <span className="link-underline-text">{children}</span>
    </RouterLink>
  );
}
