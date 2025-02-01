import { cn } from "@/lib/cn";
import { menuItems, role } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={cn("text-sm")}>
      {menuItems.map((item) => (
        <div key={item.title}>
          <span
            className={cn("py-2 px-4 hidden lg:block text-gray-400 font-light")}
          >
            {item.title}
          </span>
          {item.items.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className={cn(
                    "flex items-center justify-center lg:justify-start gap-4 py-3 px-4 hover:pl-6 transition-all duration-300  hover:bg-mainSkyLight"
                  )}
                >
                  <Image
                    src={subItem.icon}
                    alt={subItem.label}
                    width={16}
                    height={16}
                  />
                  <span className={cn("hidden lg:block")}>{subItem.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
