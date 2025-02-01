"use client";

import { cn } from "@/lib/cn";
import { countChart } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const CountChart = () => {
  return (
    <div className={cn("bg-white rounded-xl p-4 h-full")}>
      {/* HEAD */}
      <div className={cn("flex items-center justify-between")}>
        <h1 className={cn("text-lg font-semibold")}>Students</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className={cn("relative w-full h-[75%]")}>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={countChart}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt="maleFemale"
          width={70}
          height={70}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          )}
        />
      </div>

      {/* FOOT */}
      <div
        className={cn(
          "flex justify-center mixin:flex mixin:gap-1 mixin:flex-col mixin:items-center gap-16"
        )}
      >
        <div className={cn("mixin")}>
          <div className={cn("w-5 h-5 bg-mainSky rounded-full")} />
          <h1 className={cn("font-bold")}>1,234</h1>
          <h2 className={cn("text-xs text-gray-300")}>Boys (55%)</h2>
        </div>
        <div className={cn("mixin")}>
          <div className={cn("w-5 h-5 bg-thirdYellow rounded-full")} />
          <h1 className={cn("font-bold")}>1,234</h1>
          <h2 className={cn("text-xs text-gray-300")}>Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
