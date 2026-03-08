import { FocusTrap } from 'focus-trap-react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import Logo from '@/assets/svg/logo.svg';

import type { Nav_MenuItems } from '@/lib/data/nav';

import { setNoScroll } from '@/lib/utils/setNoScroll';
import { DesktopNav } from '@/components/header/nav/desktop';
import { MobileNav } from '@/components/header/nav/mobile';
import { tabletLgQuery, useMediaQuery } from '@/lib/utils/mediaQueries';
import MenuToggle from '@/components/header/nav/toggle';

export interface HeaderProps {
    /* Nav to pass into header */
    menuItems?: Nav_MenuItems[] | null;
}

export const Header: FC<HeaderProps> = ({ menuItems }) => {

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
            <header>
                <div className='flex flex-row! py-0 px-3 mb-6 relative gap-10 justify-between items-center box-shadow transition-[margin,padding] mobile-lg:px-6 tablet-lg:py-1.5 laptop:mb-12 before:rounded-[8px]'>
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

                    <div className='flex nav z-2'>
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
                    {menuOpen && (
                        <MobileNav
                          className="block lg:hidden"
                          ariaHidden={!menuOpen}
                          menuItems={menuItems}
                          menuOpen={menuOpen}
                          setMenuOpen={setMenuOpen}
                        />
                    )}
                </div>
            </header>
        </FocusTrap>
    );
};
