"use client";

import { ShineBorder } from "@/components/UI/shine-border";
import { AnglePie } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const AnglePieChart = () => {
  return (
    <ShineBorder
      className={cn(
        "!w-full !h-80 rounded-xl !p-4 bg-white !place-items-stretch !min-h-0 !min-w-0"
      )}
      color={["#43beeb", "#7876f5", "#e9ca40"]}
    >
      <div className={cn("flex items-center justify-between")}>
        <h1 className={cn("text-xl font-semibold")}>Performance</h1>
        <Image
          src={"/moreDark.png"}
          alt="more"
          width={20}
          height={20}
          className={cn("cursor-pointer")}
        />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={AnglePie}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        )}
      >
        <h1 className={cn("text-3xl font-bold")}>9.2</h1>
        <p className={cn("text-xs text-gray-300")}>of 10 max</p>
      </div>
      <h2
        className={cn(
          "absolute font-medium left-0 right-0 text-center m-auto bottom-20"
        )}
      >
        1st Semester - 2nd Semester
      </h2>
    </ShineBorder>
  );
};

export default AnglePieChart;
