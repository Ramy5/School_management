import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { classesData, IClassesData, role } from "@/lib/constants";
import React from "react";

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderClassesRow = (classes: IClassesData) => {
  return (
    <tr
      key={classes.id}
      className={cn(
        "even:bg-slate-50  border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("p-4")}>{classes.name}</td>
      <td className={cn("hidden md:table-cell")}>{classes.capacity}</td>
      <td className={cn("hidden md:table-cell")}>{classes.grade}</td>
      <td className={cn("hidden lg:table-cell")}>{classes.supervisor}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          {role === "admin" && (
            <>
              <FormModal
                type="update"
                id={classes.id}
                data={classes}
                tableTitle="classes"
              />
              <FormModal
                type="delete"
                id={classes.id}
                data={classes}
                tableTitle="classes"
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const ClassesListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Classes" />

      {/* CLASSES LIST */}
      <Table
        columns={columns}
        data={classesData}
        renderRow={renderClassesRow}
      />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassesListPage;
