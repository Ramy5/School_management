import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { eventsData, IEventsData, role } from "@/lib/constants";
import React from "react";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden sm:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden lg:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderEventsRow = (events: IEventsData) => {
  return (
    <tr
      key={events.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{events.title}</td>
      <td className={cn("hidden sm:table-cell")}>{events.class}</td>
      <td className={cn("hidden md:table-cell")}>{events.date}</td>
      <td className={cn("hidden lg:table-cell")}>{events.startTime}</td>
      <td className={cn("hidden lg:table-cell")}>{events.endTime}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          {role === "admin" && (
            <>
              <FormModal
                tableTitle="events"
                type="update"
                id={events.id}
                data={events}
              />
              <FormModal
                tableTitle="events"
                type="delete"
                id={events.id}
                data={events}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const EventsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Events" tableTitle="events" />

      {/* EVENTS LIST */}
      <Table columns={columns} data={eventsData} renderRow={renderEventsRow} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default EventsListPage;
