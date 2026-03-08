import type { FC } from 'react';

import { Menu } from '@/components/header/nav/menu';
import type { MenuProps } from '@/components/header/nav/menu';
import LazyMotionDom from '@/lib/utils/motion/lazyMotionDom';
import { cn } from '@/lib/utils/cn';

export const DesktopNav: FC<MenuProps> = ({ className, menuItems, menuOpen, setMenuOpen }) => (
    <LazyMotionDom>
        <nav className={cn("flex desktop-nav", className)}>
            <Menu
              menuItems={menuItems}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              className="text-blue-500"
            />
        </nav>
    </LazyMotionDom>
);
