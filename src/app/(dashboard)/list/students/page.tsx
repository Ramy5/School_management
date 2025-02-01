import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { IStudentsData, role, studentsData } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderStudentRow = (student: IStudentsData) => {
  return (
    <tr
      key={student.id}
      className={cn(
        "even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("flex gap-4 p-4 items-center")}>
        <Image
          src={student.photo}
          alt={student.name}
          width={40}
          height={40}
          className={cn(
            "w-10 h-10 rounded-full object-cover",
            "md:hidden xl:block"
          )}
        />
        <div className={cn("flex flex-col")}>
          <h3 className={cn("font-semibold")}>{student.name}</h3>
          <p className={cn("text-xs text-gray-500")}>{student.class}</p>
        </div>
      </td>
      <td className={cn("hidden md:table-cell")}>{student.studentId}</td>
      <td className={cn("hidden md:table-cell")}>{student.grade}</td>
      <td className={cn("hidden lg:table-cell")}>{student.phone}</td>
      <td className={cn("hidden lg:table-cell")}>{student.address}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          <Link href={`/list/students/${student.id}`}>
            <button
              className={cn(
                "w-7 h-7 flex items-center justify-center rounded-full bg-mainSky"
              )}
            >
              <Image src="/view.png" alt="view" width={14} height={14} />
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

const StudentsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Students" />

      {/* STUDENTS LIST */}
      <Table
        columns={columns}
        data={studentsData}
        renderRow={renderStudentRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentsListPage;
