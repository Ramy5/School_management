"use client";

import { cn } from "@/lib/cn";
import { attendanceChart } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AttendanceChart = () => {
  return (
    <div className={cn("bg-white rounded-xl p-4 h-full")}>
      {/* HEAD */}
      <div className={cn("flex items-center justify-between")}>
        <h1 className={cn("text-lg font-semibold")}>Attendance</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className={cn("w-full h-full pb-4")}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={attendanceChart}
            barSize={20}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="#FEFCE8" />}
            />
            <Bar
              dataKey="absent"
              legendType="circle"
              radius={[10, 10, 0, 0]}
              fill="#C3EBFA"
              activeBar={<Rectangle fill="#EDF9FD" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
