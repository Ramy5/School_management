import Announcements from "@/components/admin/Announcements";
import EventCalendar from "@/components/admin/EventCalendar";
import BigCalendar from "@/components/students/BigCalendar";
import ConfettiEffect from "@/components/UI/ConfettiEffect";
import { cn } from "@/lib/cn";
import React from "react";

const studentPage = () => {
  return (
    <div className={cn("flex flex-col xl:flex-row gap-4 p-4")}>
      <ConfettiEffect />

      {/* LEFT */}
      <div className={cn("w-full xl:w-2/3")}>
        <div className="h-full rounded-xl p-4 bg-white">
          <h1 className={cn("text-xl font-semibold")}>Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className={cn("w-full xl:w-1/3 flex flex-col gap-8")}>
        {/* CALENDAR */}
        <EventCalendar />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default studentPage;
