import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { eventsData, IAnnouncements, role } from "@/lib/constants";
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
    header: "Actions",
    accessor: "actions",
  },
];

const renderAnnouncementsRow = (announcements: IAnnouncements) => {
  return (
    <tr
      key={announcements.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{announcements.title}</td>
      <td className={cn("hidden sm:table-cell")}>{announcements.class}</td>
      <td className={cn("hidden md:table-cell")}>{announcements.date}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          {role === "admin" && (
            <>
              <FormModal
                tableTitle="announcements"
                type="update"
                id={announcements.id}
                data={announcements}
              />
              <FormModal
                tableTitle="announcements"
                type="delete"
                id={announcements.id}
                data={announcements}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const AnnouncementsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Announcements" tableTitle="announcements" />

      {/* ANNOUNCEMENTS LIST */}
      <Table
        columns={columns}
        data={eventsData}
        renderRow={renderAnnouncementsRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementsListPage;
