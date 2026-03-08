'use client';

import { Link } from '@/components/Link';
import type { FC } from 'react';

import { cn } from '@/lib/utils/cn';
import { useMediaQuery, tabletLgQuery } from '@/lib/utils/mediaQueries';
import type { Nav_MenuItems } from '@/lib/data/nav';

export type MenuItems = Nav_MenuItems[] | null;

export interface MenuProps {
    className?: string;
    menuItems: MenuItems;
    menuOpen?: boolean;
    setMenuOpen?: (menuOpen: boolean) => void;
    /** Show arrow on mobile only (below tablet-lg). Default true for header; set false for footer. */
    showIcon?: boolean;
    /** Show dashed separator lines between items. Default true for nav; set false for footer. */
    showSeparators?: boolean;
}

export const Menu: FC<MenuProps> = ({
    menuItems,
    className,
    setMenuOpen,
    showIcon = true,
    showSeparators = true
}) => {
    const isTabletLg = useMediaQuery(tabletLgQuery);

    const menuContent = menuItems?.map((menuItem) => {

        const handleClick = () => {
            setMenuOpen?.(false);
        };

        return (
            <li
              key={menuItem.href}
              className={cn(
                'flex relative w-full flex-col tablet-lg:block tablet-lg:w-auto',
                'last:before:hidden',
                'before:absolute before:left-0 before:block before:content-[""] before:w-full before:h-px before:-bottom-5.5 tablet-lg:before:hidden',
                showSeparators && 'dash-border'
              )}
            >
                <Link
                  key={menuItem.href}
                  to={menuItem.href}
                  icon={showIcon && !isTabletLg}
                  className='target-area-flex flex w-full justify-between items-center menu-link text-blue-500! tablet-lg:justify-center text-center before:hidden tablet-lg:before:block before:w-[calc(100%-40px)] before:l-5 font-semibold tablet-lg:inline-block tablet-lg:w-auto'
                  onClick={handleClick}
                >
                    {menuItem.label}
                </Link>
            </li>
        );
    });

    return <ul
      className={cn('flex w-full flex-col gap-11 list-none mbs-0 mbe-0 ps-0 pe-0 z-1 tablet-lg:flex-row items-start tablet-lg:items-center', className)}
    >
        {menuContent}
    </ul>;
};
