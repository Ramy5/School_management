import Announcements from "@/components/admin/Announcements";
import BigCalendar from "@/components/students/BigCalendar";
import { cn } from "@/lib/cn";
import React from "react";

const TeacherPage = () => {
  return (
    <div className={cn("flex flex-1 flex-col xl:flex-row gap-4 p-4")}>
      {/* LEFT */}
      <div className={cn("w-full xl:w-2/3")}>
        <div className="h-full rounded-xl p-4 bg-white">
          <h1 className={cn("text-xl font-semibold")}>Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className={cn("w-full xl:w-1/3 flex flex-col gap-8")}>
        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
