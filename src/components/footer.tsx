import { navItems } from "@/lib/data/nav";
import { Menu } from "@/components/header/nav/menu";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-3 px-6 mt-12 mb-6 mx-auto justify-between w-full flex flex-1 box-shadow items-center bg-blue-500">
        <div className="z-1 text-gray-50">
            <p className="font-medium">copyright © chai landau {year}</p>
        </div>
        <div>
            <Menu
              menuItems={navItems}
              className="text-gray-50"
            />
        </div>
    </footer>
  );
};
