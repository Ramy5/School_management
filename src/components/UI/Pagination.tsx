import { cn } from "@/lib/cn";
import React from "react";

const Pagination = () => {
  return (
    <div
      className={cn(
        "flex justify-between items-center text-gray-500 p-4",
        "mixin/button:py-2 mixin/button:px-4 mixin/button:rounded-md mixin/button:bg-slate-200 mixin/button:text-xs mixin/button:font-semibold "
      )}
    >
      {/* PREV BUTTON */}
      <button
        disabled
        className={cn(
          "mixin/button",
          "disabled:!opacity-50 disabled:!cursor-not-allowed"
        )}
      >
        Prev
      </button>

      {/* PAGE NUMBER */}
      <div
        className={cn(
          "flex items-center gap-2 text-sm",
          "mixin/numberBtn:px-2 mixin/numberBtn:py-1 mixin/numberBtn:rounded-md"
        )}
      >
        <button className={cn("mixin/numberBtn bg-mainSky")}>1</button>
        <button className={cn("mixin/numberBtn")}>2</button>
        <button className={cn("mixin/numberBtn")}>3</button>
        ...
        <button className={cn("mixin/numberBtn")}>10</button>
      </div>

      {/* NEXT BUTTON */}
      <button
        className={cn(
          "mixin/button",
          "disabled:!opacity-50 disabled:!cursor-not-allowed"
        )}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
