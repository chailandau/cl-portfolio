import { cn } from '@/lib/utils/cn';

const highlightClass: Record<string, string> = {
  aqua: 'colored-subhead-highlight colored-subhead-highlight-aqua',
  pink: 'colored-subhead-highlight colored-subhead-highlight-pink',
  white: 'colored-subhead-highlight colored-subhead-highlight-white',
  green: 'colored-subhead-highlight colored-subhead-highlight-green',
  gray: 'colored-subhead-highlight colored-subhead-highlight-gray',
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
  large,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <p
      className={cn(
        'max-w-200 font-sans text-foreground',
        large
          ? 'text-subhead-lg colored-subhead-large'
          : 'text-subhead leading-14! tablet:leading-18!',
        className,
      )}
    >
      {children}
    </p>
  );
}
