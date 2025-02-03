import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { ILessonsData, lessonsData, role } from "@/lib/constants";
import React from "react";

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden sm:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderLesSonsRow = (lessons: ILessonsData) => {
  return (
    <tr
      key={lessons.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{lessons.subject}</td>
      <td className={cn("hidden sm:table-cell")}>{lessons.class}</td>
      <td className={cn("hidden md:table-cell")}>{lessons.teacher}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          {role === "admin" && (
            <>
              <FormModal
                tableTitle="lessons"
                type="update"
                id={lessons.id}
                data={lessons}
              />
              <FormModal
                tableTitle="lessons"
                type="delete"
                id={lessons.id}
                data={lessons}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const LessonsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Lessons" />

      {/* LESSONS LIST */}
      <Table
        columns={columns}
        data={lessonsData}
        renderRow={renderLesSonsRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default LessonsListPage;
