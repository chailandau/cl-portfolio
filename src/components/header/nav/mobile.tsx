import { cn } from '@/lib/utils/cn';
import { m, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import type { FC } from 'react';

import { Menu } from '@/components/menu';
import type { MenuProps } from '@/components/menu';
import { menuAnimations } from '@/lib/utils/motion/menuAnimations';
import LazyMotionDom from '@/lib/utils/motion/lazyMotionDom';

interface MobileNavProps extends MenuProps {
    ariaHidden: boolean;
}

export const MobileNav: FC<MobileNavProps> = ({ className, menuItems, ariaHidden, menuOpen, setMenuOpen }) => {
    const prefersReducedMotion = useReducedMotion() || false;

    return (
        <LazyMotionDom>
            <m.nav
              className={cn(
                'fixed left-5 top-16.5 z-100 flex w-[calc(100%-2.5rem)] flex-col items-start justify-between rounded-[8px] px-6 pt-6 pb-7.5 box-shadow tablet-lg:hidden',
                className
              )}
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
        </LazyMotionDom>
    );
};
