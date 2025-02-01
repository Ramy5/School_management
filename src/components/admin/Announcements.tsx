import { cn } from "@/lib/cn";
import { announcements } from "@/lib/constants";
import React from "react";

const Announcements = () => {
  return (
    <div className={cn("bg-white p-4 rounded-xl")}>
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
    </div>
  );
};

export default Announcements;
