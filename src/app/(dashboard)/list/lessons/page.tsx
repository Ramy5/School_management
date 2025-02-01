import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { ILessonsData, lessonsData, role } from "@/lib/constants";
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
          <Link href={`/list/lessons/${lessons.id}`}>
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
