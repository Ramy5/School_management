import BigCalendar from "@/components/students/BigCalendar";
import TeacherCardInfo from "@/components/UI/TeacherCardInfo";
import { cn } from "@/lib/utils";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className={cn("flex flex-1 flex-col gap-4 p-4", "xl:flex-row")}>
      {/* LEFT */}
      <div className={cn("w-full xl:w-2/3")}>
        {/* TOP */}
        <TeacherCardInfo />

        {/* BOTTOM */}
        <div className={cn("h-[800px] rounded-xl p-4 bg-white")}>
          <h1 className={cn("text-xl font-semibold")}>
            Teacher&apos;s Schedule
          </h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className={cn("w-full", "xl:w-1/3")}></div>
    </div>
  );
};

export default SingleTeacherPage;
