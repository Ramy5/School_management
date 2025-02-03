import { cn } from "@/lib/cn";
import { announcements } from "@/lib/constants";
import React from "react";
import { ShineBorder } from "../UI/shine-border";

const Announcements = () => {
  return (
    <ShineBorder
      className={cn(
        "!w-full !h-auto !place-items-stretch !min-h-0 !min-w-0 bg-white !p-4 relative rounded-xl"
      )}
      color={["#43beeb", "#7876f5", "#e9ca40"]}
    >
      <div>
        <div className={cn("flex items-center justify-between")}>
          <h1 className={cn("text-xl font-semibold my-4")}>Announcements</h1>
          <p className="text-gray-400 text-sm cursor-pointer">View all</p>
        </div>
      </div>

      <div className={cn("flex flex-col gap-4")}>
        {announcements.map((announcement) => {
          return (
            <div
              className={cn(
                "p-5 rounded-md  first:bg-mainSkyLight last:!bg-thirdYellowLight even:bg-secondPurpleLight "
              )}
              key={announcement.id}
            >
              <div className={cn("flex justify-between items-center")}>
                <h1 className={cn("font-semibold text-gray-600")}>
                  {announcement.title}
                </h1>
                <span
                  className={cn(
                    "text-gray-400 bg-white px-2 py-1 rounded-md text-xs"
                  )}
                >
                  {announcement.date}
                </span>
              </div>
              <p className={cn("text-gray-400 mt-2 text-sm")}>
                {announcement.description}
              </p>
            </div>
          );
        })}
      </div>
    </ShineBorder>
  );
};

export default Announcements;
