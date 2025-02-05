import React from "react";
import TableSearch from "./TableSearch";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { role } from "@/lib/constants";
import FormModal, { TTableTitle } from "./FormModal";

const TableHeader = ({
  title,
  tableTitle,
}: {
  title: string;
  tableTitle: TTableTitle;
}) => {
  return (
    <div className={cn("flex items-center justify-between")}>
      <h1 className={cn("hidden text-lg font-semibold", "md:block")}>
        {title}
      </h1>

      <div
        className={cn(
          "flex items-center gap-4 flex-col w-full",
          "md:flex-row  md:w-auto"
        )}
      >
        <TableSearch />
        <div
          className={cn(
            "flex items-center gap-4 self-end",
            "mixin:flex mixin:items-center mixin:justify-center mixin:w-8 mixin:h-8 mixin:rounded-full mixin:bg-thirdYellow"
          )}
        >
          <button className={cn("mixin")}>
            <Image src={"/filter.png"} alt="filter" width={14} height={14} />
          </button>
          <button className={cn("mixin")}>
            <Image src={"/sort.png"} alt="filter" width={14} height={14} />
          </button>
          {role === "admin" && (
            <FormModal type="create" tableTitle={tableTitle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
