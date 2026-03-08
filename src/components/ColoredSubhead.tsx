import { cn } from '@/lib/utils/cn';

const highlightClass: Record<string, string> = {
  aqua: 'colored-subhead-highlight colored-subhead-highlight-aqua',
  pink: 'colored-subhead-highlight colored-subhead-highlight-pink',
  white: 'colored-subhead-highlight colored-subhead-highlight-white',
};

export function Highlight({
  variant,
  children,
}: {
  variant: keyof typeof highlightClass;
  children: React.ReactNode;
}) {
  return (
    <span className={highlightClass[variant]}>
      {children}
    </span>
  );
}

export function ColoredSubhead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'max-w-200 font-sans text-foreground text-subhead leading-14! tablet:leading-18!',
        className,
      )}
    >
      {children}
    </p>
  );
}
