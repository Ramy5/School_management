import { cn } from "@/lib/cn";
import {
  IAssignmentsData,
  IClassesData,
  IEventsData,
  IExamsData,
  ILessonsData,
  IParentsData,
  IResultsData,
  IStudentsData,
  ISubjectsData,
  ITeachersData,
} from "@/lib/constants";
import React from "react";

interface IColumns {
  header: string;
  accessor: string;
  className?: string;
}

// REFACTOR: use generics
type TTeacherRenderRow = (item: ITeachersData) => React.ReactNode;
type TStudentRenderRow = (item: IStudentsData) => React.ReactNode;
type TParentRenderRow = (item: IParentsData) => React.ReactNode;
type TSubjectRenderRow = (item: ISubjectsData) => React.ReactNode;
type TClassesRenderRow = (item: IClassesData) => React.ReactNode;
type TLessonsRenderRow = (item: ILessonsData) => React.ReactNode;
type TExamsRenderRow = (item: IExamsData) => React.ReactNode;
type TAssignmentsRenderRow = (item: IAssignmentsData) => React.ReactNode;
type TResultRenderRow = (item: IResultsData) => React.ReactNode;
type TEventRenderRow = (item: IEventsData) => React.ReactNode;

type TRenderRow =
  | TTeacherRenderRow
  | TStudentRenderRow
  | TParentRenderRow
  | TSubjectRenderRow
  | TClassesRenderRow
  | TLessonsRenderRow
  | TExamsRenderRow
  | TAssignmentsRenderRow
  | TResultRenderRow
  | TEventRenderRow;

type TItemRenderRow = ITeachersData &
  IStudentsData &
  IParentsData &
  ISubjectsData &
  IClassesData &
  ILessonsData &
  IExamsData &
  IAssignmentsData &
  IResultsData &
  IEventsData;

interface ITableProps {
  columns: IColumns[];
  data: unknown[];
  renderRow: TRenderRow;
}

const Table = ({ columns, data, renderRow }: ITableProps) => {
  return (
    <table className={cn("w-full mt-4 text-left")}>
      <thead>
        <tr className={cn("text-sm text-gray-500")}>
          {columns.map((column) => {
            return (
              <th key={column.accessor} className={cn(column.className)}>
                {column.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return renderRow(item as TItemRenderRow);
        })}
      </tbody>
    </table>
  );
};

export default Table;
