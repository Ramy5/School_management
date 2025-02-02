import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const TeacherCardInfo = () => {
  return (
    <div className={cn("flex flex-col relative gap-4 mb-4", "lg:flex-row")}>
      {/* USER INFO CARD */}
      <div className={cn("bg-mainSky px-4 py-6 rounded-xl flex flex-1 gap-4")}>
        <div className={cn("w-1/3")}>
          <Image
            src={"/avatar.png"}
            alt="avatar"
            width={144}
            height={144}
            className={cn("w-36 h-36 rounded-full object-cover")}
          />
        </div>

        <div className={cn("w-2/3 flex flex-col justify-between gap-4")}>
          <h1 className={cn("text-xl font-semibold")}>test name</h1>
          <p className={cn("text-sm text-gray-500")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing
            elit.
          </p>
          <div
            className={cn(
              "flex items-center gap-2 justify-between flex-wrap text-xs font-medium",
              "mixin/userInfo:w-full mixin/userInfo:md-1/3 mixin/userInfo:lg:w-full mixin/userInfo:2xl:w-1/3 mixin/userInfo:flex mixin/userInfo:items-center mixin/userInfo:gap-2"
            )}
          >
            <div className={cn("mixin/userInfo")}>
              <Image src={"/blood.png"} alt="blood" width={14} height={14} />
              <span>A+</span>
            </div>
            <div className={cn("mixin/userInfo")}>
              <Image src={"/date.png"} alt="date" width={14} height={14} />
              <span>January 2025</span>
            </div>
            <div className={cn("mixin/userInfo")}>
              <Image src={"/mail.png"} alt="mail" width={14} height={14} />
              <span>user@gmail.com</span>
            </div>
            <div className={cn("mixin/userInfo")}>
              <Image src={"/phone.png"} alt="phone" width={14} height={14} />
              <span>+123456789</span>
            </div>
          </div>
        </div>
      </div>

      {/* SMALL CARDS */}
      <div className={cn("flex-1 flex gap-4 justify-between flex-wrap")}>
        {/* CARD */}
        <div
          className={cn(
            "bg-white p-4 rounded-md flex gap-4 w-full",
            "md:w-1[48%] xl:w-[45%] 2xl:w-[48%]"
          )}
        >
          <Image
            src={"/singleAttendance.png"}
            alt="singleAttendance"
            width={24}
            height={24}
            className={cn("w-6 h-6")}
          />
          <div>
            <h1 className={cn("text-xl font-semibold")}>90%</h1>
            <span className={cn("text-sm text-gray-400")}>Attendance</span>
          </div>
        </div>
        {/* CARD */}
        <div
          className={cn(
            "bg-white p-4 rounded-md flex gap-4 w-full",
            "md:w-1[48%] xl:w-[45%] 2xl:w-[48%]"
          )}
        >
          <Image
            src={"/singleBranch.png"}
            alt="singleBranch"
            width={24}
            height={24}
            className={cn("w-6 h-6")}
          />
          <div>
            <h1 className={cn("text-xl font-semibold")}>2</h1>
            <span className={cn("text-sm text-gray-400")}>Branches</span>
          </div>
        </div>
        {/* CARD */}
        <div
          className={cn(
            "bg-white p-4 rounded-md flex gap-4 w-full",
            "md:w-1[48%] xl:w-[45%] 2xl:w-[48%]"
          )}
        >
          <Image
            src={"/singleLesson.png"}
            alt="singleClasses"
            width={24}
            height={24}
            className={cn("w-6 h-6")}
          />
          <div>
            <h1 className={cn("text-xl font-semibold")}>6</h1>
            <span className={cn("text-sm text-gray-400")}>Lessons</span>
          </div>
        </div>
        {/* CARD */}
        <div
          className={cn(
            "bg-white p-4 rounded-md flex gap-4 w-full",
            "md:w-1[48%] xl:w-[45%] 2xl:w-[48%]"
          )}
        >
          <Image
            src={"/singleClass.png"}
            alt="singleClasses"
            width={24}
            height={24}
            className={cn("w-6 h-6")}
          />
          <div>
            <h1 className={cn("text-xl font-semibold")}>6</h1>
            <span className={cn("text-sm text-gray-400")}>Classes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCardInfo;
