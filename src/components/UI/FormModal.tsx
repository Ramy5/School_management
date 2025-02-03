import { cn } from "@/lib/utils";
import Image from "next/image";

type TTableTitle =
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

interface IFormModalCreate {
  type: "create";
  tableTitle: TTableTitle;
}

interface IFormModalUpdateAndDelete {
  type: "update" | "delete";
  id: number;
  data: unknown;
  tableTitle: TTableTitle;
}

type IFormModalProps = IFormModalCreate | IFormModalUpdateAndDelete;

const FormModal = ({ type, id, data, tableTitle }: IFormModalProps) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-thirdYellow"
      : type === "update"
      ? "bg-mainSky"
      : "bg-secondPurple";

  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full",
        size,
        bgColor
      )}
    >
      <Image src={`/${type}.png`} alt={type} width={16} height={16} />
    </button>
  );
};

export default FormModal;
