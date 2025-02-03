import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { examsData, IExamsData, role } from "@/lib/constants";
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
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderExamsRow = (exams: IExamsData) => {
  return (
    <tr
      key={exams.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{exams.subject}</td>
      <td className={cn("hidden sm:table-cell")}>{exams.class}</td>
      <td className={cn("hidden md:table-cell")}>{exams.teacher}</td>
      <td className={cn("hidden lg:table-cell")}>{exams.date}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          {role === "admin" && (
            <>
              <FormModal
                tableTitle="exams"
                type="update"
                id={exams.id}
                data={exams}
              />
              <FormModal
                tableTitle="exams"
                type="delete"
                id={exams.id}
                data={exams}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const ExamsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Exams" />

      {/* EXAMS LIST */}
      <Table columns={columns} data={examsData} renderRow={renderExamsRow} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ExamsListPage;
