import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className={cn("flex items-center justify-between p-4")}>
      {/* SEARCH BAR */}
      <div
        className={cn(
          "hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
        )}
      >
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className={cn(
            "w-[200px] outline-none py-2 bg-transparent caret-gray-400"
          )}
        />
      </div>

      {/* ICONS AND USER */}
      <div
        className={cn(
          "gap-6 flex w-full justify-end items-center mixin:bg-white mixin:rounded-full mixin:w-7 mixin:h-7 mixin:flex mixin:items-center mixin:justify-center mixin:cursor-pointer"
        )}
      >
        <div className={cn("mixin")}>
          <Image src={"/message.png"} alt="message" width={20} height={20} />
        </div>
        <div className={cn("mixin relative")}>
          <Image
            src={"/announcement.png"}
            alt="announcement"
            width={20}
            height={20}
          />
          <div
            className={cn(
              "absolute text-xs -top-3 -right-3 w-4 h-4 flex items-center justify-center bg-purple-500 rounded-full text-white"
            )}
          >
            1
          </div>
        </div>
        <div className={cn("flex items-center gap-3")}>
          <div className={cn("flex flex-col")}>
            <span className={cn("text-xs leading-3 font-medium")}>John</span>
            <span className={cn("text-[10px] text-gray-500 text-right")}>
              Admin
            </span>
          </div>
          <Image
            src="/avatar.png"
            alt="avatar"
            width={36}
            height={36}
            className={cn("rounded-full")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
