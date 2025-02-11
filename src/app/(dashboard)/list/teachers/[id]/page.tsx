import Announcements from "@/components/admin/Announcements";
import AnglePieChart from "@/components/admin/Charts/AnglePieChart";
import BigCalendar from "@/components/students/BigCalendar";
import { ShineBorder } from "@/components/UI/shine-border";
import CardInfo from "@/components/UI/TeacherCardInfo";
import { singleTeacherPageData } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className={cn("flex flex-1 flex-col gap-4 p-4", "xl:flex-row")}>
      {/* LEFT */}
      <div className={cn("w-full xl:w-2/3")}>
        {/* TOP */}
        <CardInfo {...singleTeacherPageData} />

        {/* BOTTOM */}
        <ShineBorder
          className={cn(
            "!w-full !h-auto !place-items-stretch !p-0 !min-h-0 !min-w-0"
          )}
          color={["#43beeb", "#7876f5", "#e9ca40"]}
        >
          <div className={cn("h-[800px] rounded-xl p-4 bg-white")}>
            <h1 className={cn("text-xl font-semibold")}>
              Teacher&apos;s Schedule
            </h1>
            <BigCalendar />
          </div>
        </ShineBorder>
      </div>

      {/* RIGHT */}
      <div className={cn("w-full space-y-4", "xl:w-1/3")}>
        <ShineBorder
          className={cn(
            "!w-full !h-auto !place-items-stretch !p-4 !min-h-0 !min-w-0",
            "bg-white rounded-xl"
          )}
          color={["#43beeb", "#7876f5", "#e9ca40"]}
        >
          <h1 className={cn("text-xl font-semibold")}>Shortcuts</h1>
          <div
            className={cn(
              "mt-4 flex flex-wrap gap-4 text-xs text-gray-500",
              "mixin/shortcut:p-3 mixin/shortcut:rounded-md"
            )}
          >
            <Link
              className={cn("mixin/shortcut", "bg-mainSkyLight")}
              href={"/"}
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className={cn("mixin/shortcut", "bg-secondPurpleLight")}
              href={"/"}
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className={cn("mixin/shortcut", "bg-thirdYellowLight")}
              href={"/"}
            >
              Teacher&apos;s Lessons
            </Link>
            <Link className={cn("mixin/shortcut", "bg-pink-50")} href={"/"}>
              Teacher&apos;s Exams
            </Link>
            <Link
              className={cn("mixin/shortcut", "bg-mainSkyLight")}
              href={"/"}
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </ShineBorder>

        <AnglePieChart />

        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
