"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import BaseInput from "../UI/BaseInput";
import {
  CreateTeacherSchema,
  TCreateTeacherSchemaInputs,
} from "@/Schema/CreateTeacherSchema";
import Image from "next/image";

interface ITeacherFormProps {
  type: "create" | "update";
  data?: TCreateTeacherSchemaInputs;
}

const TeacherForm = ({ type, data }: ITeacherFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateTeacherSchemaInputs>({
    resolver: zodResolver(CreateTeacherSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={cn("flex flex-col gap-8")} onSubmit={onSubmit}>
      <h1 className={cn("text-xl font-semibold")}>Create a new teacher</h1>
      <span className={cn("text-xs font-medium text-gray-400")}>
        Authentication Information
      </span>
      <div className={cn("flex justify-between flex-wrap gap-4xin")}>
        <BaseInput
          label="Username"
          name="userName"
          register={register}
          error={errors.userName}
          defaultValue={data?.userName}
        />
        <BaseInput
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          defaultValue={data?.email}
        />
        <BaseInput
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
          defaultValue={data?.password}
        />
      </div>
      <span className={cn("text-xs font-medium text-gray-400")}>
        Personal Information
      </span>
      <div className={cn("flex justify-between flex-wrap gap-4")}>
        <BaseInput
          label="First name"
          name="firstName"
          register={register}
          error={errors.firstName}
          defaultValue={data?.firstName}
        />
        <BaseInput
          label="Last name"
          name="lastName"
          register={register}
          error={errors.lastName}
          defaultValue={data?.lastName}
        />
        <BaseInput
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
          defaultValue={data?.phone}
        />
        <BaseInput
          label="Address"
          name="address"
          register={register}
          error={errors.address}
          defaultValue={data?.address}
        />
        <BaseInput
          label="Blood type"
          name="bloodType"
          register={register}
          error={errors.bloodType}
          defaultValue={data?.bloodType}
        />
        <BaseInput
          label="Birthday"
          name="birthday"
          type="date"
          register={register}
          error={errors.birthday}
          defaultValue={data?.birthday}
        />
        {/* SELECT */}
        <div className={cn("flex flex-col gap-2 w-full md:w-1/4")}>
          <label className={cn("text-xs text-gray-500 ")} htmlFor={"sex"}>
            Sex
          </label>
          <select
            {...register("sex")}
            id={"sex"}
            className={cn(
              "ring-[1.5px] ring-gray-300 rounded-md text-sm w-full p-2"
            )}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && (
            <p className={cn("text-xs text-red-400")}>
              {errors.sex.message?.toString()}
            </p>
          )}
        </div>
        {/* UPLOAD IMAGE */}
        <div
          className={cn("flex flex-col gap-2 w-full md:w-1/4 justify-center ")}
        >
          <label
            htmlFor={"img"}
            className={cn(
              "flex items-center text-xs gap-2 cursor-pointer text-gray-500 "
            )}
          >
            <Image src="/upload.png" alt="upload" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input
            type="file"
            id={"img"}
            className={cn("hidden")}
            accept="image/*"
            {...register("img")}
          />
          {errors.img && (
            <p className={cn("text-xs text-red-400")}>
              {errors.img.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <button
        className={cn(
          "bg-blue-400 justify-self-center text-white p-2 rounded-md"
        )}
      >
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
