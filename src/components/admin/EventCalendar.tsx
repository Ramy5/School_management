"use client";

import { cn } from "@/lib/cn";
import { events } from "@/lib/constants";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={cn("bg-white p-4 rounded-xl")}>
      <Calendar onChange={onChange} value={value} />
      <div>
        <div className={cn("flex items-center justify-between")}>
          <h1 className={cn("text-xl font-semibold my-4")}>Events</h1>
          <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </div>
      </div>
      <div className={cn("flex flex-col gap-4")}>
        {events.map((event) => {
          return (
            <div
              className={cn(
                "p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mainSky even:border-t-secondPurple"
              )}
              key={event.id}
            >
              <div className={cn("flex justify-between items-center")}>
                <h1 className={cn("font-semibold text-gray-600")}>
                  {event.title}
                </h1>
                <span className={cn("text-gray-300 text-xs")}>
                  {event.time}
                </span>
              </div>
              <p className={cn("text-gray-400 mt-2 text-sm")}>
                {event.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
