'use client';

import { Link } from '@tanstack/react-router';
import type { FC } from 'react';

import type { HeaderProps } from '@/components/header';
import { cn } from '@/lib/utils/cn';
import { useMediaQuery, tabletLgQuery  } from '@/lib/utils/media-queries';

export interface MenuProps extends HeaderProps {
    className?: string;
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
}

export const Menu: FC<MenuProps> = ({
    menuItems,
    className,
    setMenuOpen
}) => {
    const isTabletLg = useMediaQuery(tabletLgQuery);
    const menuContent = menuItems?.map((menuItem) => {

        const handleClick = () => {
            setMenuOpen(false);
        };

        return (
            <li
              key={menuItem.href}
              className={cn("flex relative w-full flex-col tablet-lg:block tablet-lg:w-auto last:before:hidden before:block before:content-[''] before:w-full before:h-px before:top-[unset] before:-bottom-5.5 before:transform-[unset] tablet-lg:before:hidden",
                isTabletLg && 'before:dash-border'
              )}
            >
                <Link
                  key={menuItem.href}
                  to={menuItem.href}
                  className='font-mono text-xl tablet-lg:text-base justify-between w-auto tablet-lg:justify-center text-center before:hidden tablet-lg:before:block before:w-[calc(100%-40px)] before:l-5'
                    // underline={false}
                  onClick={handleClick}
                // ariaLabel={menuLabel || ''}
                >
                    {menuItem.label}
                </Link>
            </li>
        );
    });

    return <ul
      className={cn('flex w-full flex-col gap-11 list-none mbs-0 mbe-0 ps-0 pe-0 z-1 tablet-lg:flex-row', className)}
    >
        {menuContent}
    </ul>;
};
