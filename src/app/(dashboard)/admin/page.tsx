import UserCard from "@/components/UserCard";
import { cn } from "@/lib/cn";
import React from "react";

const AdminPage = () => {
  return (
    <div className={cn("flex flex-col p-4 gap-4 md:flex-row")}>
      {/* LEFT */}
      <div className={cn("w-full lg:w-2/3")}>
        {/* USER CARDS */}
        <div className={cn("flex items-center justify-center gap-2 flex-wrap")}>
          <UserCard type="Students" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staffs" />
        </div>
      </div>

      {/* RIGHT */}
      <div className={cn("w-full lg:w-1/3")}>R</div>
    </div>
  );
};

export default AdminPage;
