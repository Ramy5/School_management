import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { ISubjectsData, role, subjectsData } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderSubjectRow = (subject: ISubjectsData) => {
  return (
    <tr
      key={subject.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{subject.name}</td>
      <td className={cn("hidden md:table-cell")}>
        {subject.teachers.join(", ")}
      </td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          <Link href={`/list/subjects/${subject.id}`}>
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

const SubjectsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Subjects" />

      {/* SUBJECTS LIST */}
      <Table
        columns={columns}
        data={subjectsData}
        renderRow={renderSubjectRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default SubjectsListPage;
