import { navItems } from "@/lib/data/nav";
import { Menu } from "@/components/menu";
import { cn } from "@/lib/utils/cn";
import type { FC } from "react";

export const Footer = () => (
    <footer>
      <div className="relative py-3 px-6 mt-12 mb-6 mx-auto tablet-lg:justify-between w-full flex tablet-lg:flex-1 box-shadow items-center bg-blue-500">
       <Copyright className="hidden tablet-lg:block text-gray-50 font-medium" />
        <div className="footer-menu w-full px-4 tablet-lg:px-0 tablet-lg:w-auto">
            <Menu
              menuItems={navItems}
              showIcon={false}
              showSeparators={false}
              className="[&_a]:text-gray-50! [&_li]:w-auto [&_a]:text-left flex-row justify-center tablet-lg:justify-start"
            />
        </div>
        </div>
        <Copyright className="block tablet-lg:hidden text-gray-900 text-center" />
    </footer>
  );

const Copyright: FC<{className?: string}> = ({className}) =>{ 
  const year = new Date().getFullYear();
  return (
  <div className={cn("z-1", className)}>
  <p>copyright © chai landau {year}</p>
</div>
);};