import { cn } from "@/lib/cn";
import { menuItems, role } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "./text-animate";
import { Particles } from "./particles";

const Menu = () => {
  return (
    <div className={cn("relative text-sm")}>
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={"#7fcce7"}
        refresh
      />
      {menuItems.map((item) => (
        <div key={item.title}>
          <span
            className={cn("py-2 px-4 hidden lg:block text-gray-400 font-light")}
          >
            <TextAnimate animation="slideDown" by="character">
              {item.title}
            </TextAnimate>
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
                  <span className={cn("hidden lg:block")}>
                    <TextAnimate animation="slideRight" by="character">
                      {subItem.label}
                    </TextAnimate>
                  </span>
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
