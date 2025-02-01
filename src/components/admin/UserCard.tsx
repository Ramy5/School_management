import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div
      className={cn(
        "rounded-xl odd:bg-secondPurple even:bg-thirdYellow p-4 flex-1 min-w-[130px]"
      )}
    >
      <div className={cn("flex items-center justify-between")}>
        <span
          className={cn(
            "text-[10px] bg-white px-2 py-1 rounded-full text-green-600"
          )}
        >
          2024/25
        </span>
        <Image src={"/more.png"} alt="more" width={20} height={20} />
      </div>
      <h1 className={cn("text-2xl font-semibold my-4")}>1,234</h1>
      <h2 className={cn("capitalize text-sm font-medium text-gray-500")}>
        {type}
      </h2>
    </div>
  );
};

export default UserCard;
