"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { JSX, useState } from "react";
import dynamic from "next/dynamic";
import { TCreateTeacherSchemaInputs } from "@/Schema/CreateTeacherSchema";

const TeacherForm = dynamic(() => import("../teachers/TeacherForm"), {
  loading: () => <p>Loading...</p>,
});
const StudentForm = dynamic(() => import("../students/StudentForm"), {
  loading: () => <p>Loading...</p>,
});

type TFormType = {
  [key: string]: (
    type: "create" | "update",
    data: TCreateTeacherSchemaInputs
  ) => JSX.Element;
};

const formType: TFormType = {
  teachers: (type: "create" | "update", data: TCreateTeacherSchemaInputs) => (
    <TeacherForm type={type} data={data} />
  ),
  students: (type: "create" | "update", data: TCreateTeacherSchemaInputs) => (
    <StudentForm type={type} data={data} />
  ),
};

export type TTableTitle =
  | "teachers"
  | "parents"
  | "students"
  | "classes"
  | "subjects"
  | "lessons"
  | "exams"
  | "assignments"
  | "results"
  | "attendance"
  | "announcements"
  | "events";

interface IFormModal {
  type: "create" | "update" | "delete";
  tableTitle: TTableTitle;
  id: number;
  data: TCreateTeacherSchemaInputs;
}

const FormModal = ({ type, id, data, tableTitle }: IFormModal) => {
  console.log("🚀 ~ FormModal ~ id:", id);
  const [isOpen, setIsOpen] = useState(false);

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-thirdYellow"
      : type === "update"
      ? "bg-mainSky"
      : "bg-secondPurple";

  const renderForm = () => {
    if (type === "delete") {
      return (
        <form action={""} className={cn("flex p-4 flex-col gap-4")}>
          <span className={cn("text-center font-medium")}>
            All data will be lost. Are you sure you want to delete this{" "}
            {tableTitle}?
          </span>
          <button
            className={cn(
              "bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
            )}
          >
            Delete
          </button>
        </form>
      );
    } else if (type === "update" || type === "create") {
      const FormComponent = formType[tableTitle];
      if (FormComponent) {
        return FormComponent(type, data);
      }
    }
    return "Form not found";
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center justify-center rounded-full",
          size,
          bgColor
        )}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
      </button>

      {isOpen && (
        <div
          className={cn(
            "w-screen h-screen left-0 absolute top-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          )}
        >
          <div
            className={cn(
              "bg-white p-4 rounded-md relative w-[90%]",
              "md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
            )}
          >
            <div
              className={cn("absolute top-4 right-4 cursor-pointer")}
              onClick={() => setIsOpen(false)}
            >
              <Image src={"/close.png"} alt="close" width={14} height={14} />
            </div>

            {/* FORM FOR DELETE, UPDATE, OR CREATE */}
            {renderForm()}
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
