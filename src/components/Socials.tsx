import type { FC } from 'react';
import { cn } from '@/lib/utils/cn';
import type { SocialItem } from '@/lib/data/socials';

export interface SocialsProps {
  items: SocialItem[];
  className?: string;
}

const SocialLink: FC<SocialItem> = ({ icon, label, socialLink }) => {
  if (!socialLink || !icon.url || !label) return null;

  const isExternal = socialLink.startsWith('http');
  const linkProps = isExternal
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={socialLink}
      className="link-underline link-underline--row font-medium text-blue-500! text-lg"
      {...linkProps}
    >
      <img
        src={icon.url}
        alt={icon.alt}
        width={icon.width ?? 40}
        height={icon.height ?? 40}
        className="w-10 shrink-0 object-contain"
      />
      <span className="link-underline-row-content">
        <span className="link-underline-text">{label}</span>
        <span
          className="link-underline-icon"
          aria-hidden
        >{'>'}</span>
      </span>
    </a>
  );
};

export const Socials: FC<SocialsProps> = ({ items, className }) => (
  <ul
    className={cn(
      'socials-list grid w-full max-w-200 mx-auto gap-14 list-none my-0 p-0',
      'tablet:grid-cols-2 tablet:gap-8',
      className
    )}
  >
    {items.map((item) => (
      <li
        key={item.label}
        className="socials-list-item"
      >
        <SocialLink {...item} />
      </li>
    ))}
  </ul>
);
