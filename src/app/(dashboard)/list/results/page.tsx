import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { IResultsData, resultsData, role } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Student",
    accessor: "student",
    className: "hidden sm:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell",
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

const renderResultsRow = (results: IResultsData) => {
  return (
    <tr
      key={results.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{results.subject}</td>
      <td className={cn("hidden sm:table-cell")}>{results.student}</td>
      <td className={cn("hidden md:table-cell")}>{results.score}</td>
      <td className={cn("hidden md:table-cell")}>{results.teacher}</td>
      <td className={cn("hidden lg:table-cell")}>{results.class}</td>
      <td className={cn("hidden lg:table-cell")}>{results.date}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          <Link href={`/list/results/${results.id}`}>
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

const ResultsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Results" />

      {/* EXAMS LIST */}
      <Table
        columns={columns}
        data={resultsData}
        renderRow={renderResultsRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ResultsListPage;
