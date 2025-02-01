import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { assignmentsData, IAssignmentsData, role } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
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
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderAssignmentsRow = (assignments: IAssignmentsData) => {
  return (
    <tr
      key={assignments.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{assignments.subject}</td>
      <td className={cn("hidden sm:table-cell")}>{assignments.class}</td>
      <td className={cn("hidden md:table-cell")}>{assignments.teacher}</td>
      <td className={cn("hidden lg:table-cell")}>{assignments.dueDate}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          <Link href={`/list/assignments/${assignments.id}`}>
            <button
              className={cn(
                "w-7 h-7 flex items-center justify-center rounded-full bg-mainSky"
              )}
            >
              <Image src="/edit.png" alt="edit" width={14} height={14} />
            </button>
          </Link>
          {role === "admin" && (
            <button
              className={cn(
                "w-7 h-7 flex items-center justify-center rounded-full bg-secondPurple"
              )}
            >
              <Image src="/delete.png" alt="delete" width={14} height={14} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

const AssignmentsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Assignments" />

      {/* EXAMS LIST */}
      <Table
        columns={columns}
        data={assignmentsData}
        renderRow={renderAssignmentsRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
