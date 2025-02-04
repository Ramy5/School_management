"use client";

interface ITeacherFormProps {
  type: "create" | "update";
  data: unknown;
}

const TeacherForm = ({ type, data }: ITeacherFormProps) => {
  return <form>input</form>;
};

export default TeacherForm;
