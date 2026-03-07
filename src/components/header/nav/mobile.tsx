import { cn } from '@/lib/utils/cn';
import { m, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import type { FC } from 'react';

import { Menu } from '@/components/header/nav/menu';
import type { MenuProps } from '@/components/header/nav/menu';
import { menuAnimations } from '@/lib/utils/motion/menu-animations';
import LazyAnimatePresence from '@/lib/utils/motion/lazy-animate-presence';

interface MobileNavProps extends MenuProps {
    ariaHidden: boolean;
}

export const MobileNav: FC<MobileNavProps> = ({ className, menuItems, ariaHidden, menuOpen, setMenuOpen }) => {
    const prefersReducedMotion = useReducedMotion() || false;

    return (
        <LazyAnimatePresence>
            <m.nav
              className={cn('fixed flex flex-col justify-between items-start px-6 top-16.5 l-3 z-100 w-[calc(100%-24px)]h-auto pt-6 pb-7.5 box-shadow mobile-lg:l-5 mobile-lg:w-[calc(100%-40px)]', className)}
              variants={menuAnimations(prefersReducedMotion) as Variants}
              animate={menuOpen ? 'open' : 'closed'}
              initial='closed'
              exit='closed'
              aria-hidden={ariaHidden}
            >
                <Menu
                  menuItems={menuItems}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
            </m.nav>
        </LazyAnimatePresence>
    );
};
