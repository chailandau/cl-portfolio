import { FocusTrap } from 'focus-trap-react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import Logo from '@/assets/svg/logo.svg';

import { setNoScroll } from '@/lib/utils/setNoScroll';
import { DesktopNav } from '@/components/header/nav/desktop';
import { MobileNav } from '@/components/header/nav/mobile';
import { tabletLgQuery, useMediaQuery } from '@/lib/utils/mediaQueries';
import MenuToggle from '@/components/header/nav/toggle';
import LazyAnimatePresence from '@/lib/utils/motion/lazyAnimatePresence';
import type { MenuProps } from '@/components/menu';

export const Header: FC<MenuProps> = ({ menuItems }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const isDesktop = useMediaQuery(tabletLgQuery);

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    useEffect(() => {
        setNoScroll(menuOpen);
    }, [menuOpen]);

    useEffect(() => {
        if (isDesktop) {
            setMenuOpen(false);
        }
    }, [isDesktop]);

    return (
        <FocusTrap active={menuOpen}>
            <header className={menuOpen ? 'menu-open' : undefined}>
                <div className='relative mb-6 transition-[margin,padding] laptop:mb-12'>
                    {menuOpen && (
                        <div
                          className='fixed -top-4 -left-4 z-[-1] w-[calc(100vw+2rem)] h-[calc(100vh+2rem)] bg-purple-100/90 rounded-lg tablet-lg:hidden'
                          aria-hidden
                        />
                    )}
                    <div className='relative flex flex-row! py-0 px-3 gap-10 justify-between items-center box-shadow mobile-lg:px-6 tablet-lg:py-1.5 before:rounded-[8px]'>
                        <Link
                          to={'/'}
                          className={'logo'}
                        >
                        <Image
                          className='size-8'
                          src={Logo}
                          alt='C.'
                          width={100}
                          height={100}
                        />
                    </Link>

                    <div className='flex nav z-2 relative'>
                        {<DesktopNav
                          className="hidden tablet-lg:block"
                          menuItems={menuItems}
                          menuOpen={menuOpen}
                          setMenuOpen={setMenuOpen}
                        />}

                        <MenuToggle
                          menuOpen={menuOpen}
                          setMenuOpen={setMenuOpen}
                        />
                    </div>
                    <LazyAnimatePresence>
                        {menuOpen && (
                            <MobileNav
                              key="mobile-nav"
                              className="block tablet-lg:hidden"
                              ariaHidden={!menuOpen}
                              menuItems={menuItems}
                              menuOpen={menuOpen}
                              setMenuOpen={setMenuOpen}
                            />
                        )}
                    </LazyAnimatePresence>
                    </div>
                </div>
            </header>
        </FocusTrap>
    );
};
