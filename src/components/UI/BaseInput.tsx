import { cn } from "@/lib/utils";
import React from "react";
import { FieldError } from "react-hook-form";

type TBaseInput = {
  label: string;
  type?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const BaseInput = ({
  label,
  type = "text",
  name,
  defaultValue,
  register,
  error,
  ...inputProps
}: TBaseInput) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full md:w-1/4")}>
      <label className={cn("text-xs text-gray-500 ")} htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        className={cn(
          "ring-[1.5px] ring-gray-300 rounded-md text-sm w-full p-2"
        )}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error && (
        <p className={cn("text-xs text-red-400")}>
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default BaseInput;
