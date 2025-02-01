"use client";

import { cn } from "@/lib/cn";
import { financeChart } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const FinanceChart = () => {
  return (
    <div className={cn("bg-white rounded-xl p-4 h-full")}>
      {/* HEAD */}
      <div className={cn("flex items-center justify-between")}>
        <h1 className={cn("text-lg font-semibold")}>Finance</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className={cn("w-full h-full")}>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={500} height={300} data={financeChart}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
              tickMargin={10}
            />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#C3EBFA"
              activeDot={{ r: 8 }}
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#CFCEFF"
              activeDot={{ r: 8 }}
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
