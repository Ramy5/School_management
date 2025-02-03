import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { ITeachersData, role, teachersData } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subject",
    accessor: "subject",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

const renderTeacherRow = (teacher: ITeachersData) => {
  return (
    <tr
      key={teacher.id}
      className={cn(
        "even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("flex gap-4 p-4 items-center")}>
        <Image
          src={teacher.photo}
          alt={teacher.name}
          width={40}
          height={40}
          className={cn(
            "w-10 h-10 rounded-full object-cover",
            "md:hidden xl:block"
          )}
        />
        <div className={cn("flex flex-col")}>
          <h3 className={cn("font-semibold")}>{teacher.name}</h3>
          <p className={cn("text-xs text-gray-500")}>{teacher?.email}</p>
        </div>
      </td>
      <td className={cn("hidden md:table-cell")}>{teacher.teacherId}</td>
      <td className={cn("hidden md:table-cell")}>
        {teacher.subjects.join(", ")}
      </td>
      <td className={cn("hidden md:table-cell")}>
        {teacher.classes.join(", ")}
      </td>
      <td className={cn("hidden lg:table-cell")}>{teacher.phone}</td>
      <td className={cn("hidden lg:table-cell")}>{teacher.address}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          <Link href={`/list/teachers/${teacher.id}`}>
            <button
              className={cn(
                "w-7 h-7 flex items-center justify-center rounded-full bg-mainSky"
              )}
            >
              <Image src="/view.png" alt="view" width={14} height={14} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal tableTitle="teachers" type="delete" id={teacher.id} data={teacher} />
          )}
        </div>
      </td>
    </tr>
  );
};

const TeachersListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Teachers" />

      {/* TEACHERS LIST */}
      <Table
        columns={columns}
        data={teachersData}
        renderRow={renderTeacherRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeachersListPage;
