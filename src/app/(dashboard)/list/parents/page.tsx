import FormModal from "@/components/UI/FormModal";
import Pagination from "@/components/UI/Pagination";
import Table from "@/components/UI/Table";
import TableHeader from "@/components/UI/TableHeader";
import { cn } from "@/lib/cn";
import { IParentsData, parentsData, role } from "@/lib/constants";
import React from "react";

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "Student Name",
    accessor: "students",
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

const renderParentRow = (parent: IParentsData) => {
  return (
    <tr
      key={parent.id}
      className={cn(
        "even:bg-slate-50 border-b border-gray-200 text-sm hover:bg-secondPurpleLight"
      )}
    >
      <td className={cn("flex flex-col p-4 ")}>
        <h3 className={cn("font-semibold")}>{parent.name}</h3>
        <p className={cn("text-xs text-gray-500")}>{parent?.email}</p>
      </td>
      <td className={cn("hidden md:table-cell")}>
        {parent.students.join(", ")}
      </td>
      <td className={cn("hidden lg:table-cell")}>{parent.phone}</td>
      <td className={cn("hidden lg:table-cell")}>{parent.address}</td>
      <td>
        <div className={cn("flex items-center gap-2")}>
          {role === "admin" && (
            <>
              <FormModal
                tableTitle="parents"
                type="update"
                id={parent.id}
                data={parent}
              />
              <FormModal
                tableTitle="parents"
                type="delete"
                id={parent.id}
                data={parent}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const ParentsListPage = () => {
  return (
    <div className={cn("bg-white p-4  rounded-xl flex-1 m-4 mt-0")}>
      {/* HEAD */}
      <TableHeader title="All Parents" />

      {/* PARENTS LIST */}
      <Table columns={columns} data={parentsData} renderRow={renderParentRow} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentsListPage;
