import AttendanceChart from "@/components/admin/Charts/AttendanceChart";
import CountChart from "@/components/admin/Charts/CountChart";
import FinanceChart from "@/components/admin/Charts/FinanceChart";
import UserCard from "@/components/admin/UserCard";
import { cn } from "@/lib/cn";
import React from "react";
import EventCalendar from "@/components/admin/EventCalendar";
import Announcements from "@/components/admin/Announcements";

const AdminPage = () => {
  return (
    <div className={cn("flex flex-col p-4 gap-4 md:flex-row")}>
      {/* LEFT */}
      <div className={cn("w-full lg:w-2/3 flex flex-col gap-8")}>
        {/* USER CARDS */}
        <div className={cn("flex items-center justify-center gap-2 flex-wrap")}>
          <UserCard type="Students" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staffs" />
        </div>

        {/* MIDDLE CHART */}
        <div className={cn("flex flex-col xl:flex-row gap-4")}>
          {/* COUNT CHART */}
          <div className={cn("w-full h-[450px] xl:w-1/3")}>
            <CountChart />
          </div>

          {/* ATTENDANCE CHART */}
          <div className={cn("w-full h-[450px] xl:w-2/3")}>
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div className={cn("w-full h-[500px]")}>
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className={cn("w-full lg:w-1/3 flex flex-col gap-8")}>
        {/* CALENDAR */}
        <EventCalendar />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
