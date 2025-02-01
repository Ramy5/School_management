"use client";

import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/constants";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleChangeView = (selectedView: View) => setView(selectedView);

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleChangeView}
      style={{ height: "98% " }}
      min={new Date(2024, 7, 12, 8, 0, 0)}
      max={new Date(2024, 7, 12, 18, 0, 0)}
    />
  );
};
export default BigCalendar;
