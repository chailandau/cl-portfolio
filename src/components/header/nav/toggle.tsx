import { cn } from "@/lib/utils/cn";
import type { FC } from "react";

interface MenuToggleProps {
    className?: string;
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
}

const MenuToggle: FC<MenuToggleProps> = ({ className, menuOpen, setMenuOpen }) => (
        <button
          className={cn(className, 
            'p-3.5 -mt-1 -mx-3.5 mb-0 flex items-center transition-opacity tablet-lg:hidden interact:opacity-80 interact:transition-opacity', menuOpen && 'open'
        )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={'menu toggle'}
          aria-expanded={menuOpen}
        >
            <div className="w-9 h-6 relative">
                <div className='menu-toggle-inner'></div>
            </div>
        </button>
    );

export default MenuToggle;
