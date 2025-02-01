import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div
      className={cn(
        "w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
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
  );
};

export default TableSearch;
