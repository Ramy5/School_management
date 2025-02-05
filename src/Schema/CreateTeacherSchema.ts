import { z } from "zod";

export const CreateTeacherSchema = z.object({
  userName: z
    .string()
    .min(1, { message: "Username must be at least 1 character long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z
    .string()
    .email({ message: "Email must be at least 1 character long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character long" }),
  firstName: z
    .string()
    .min(1, { message: "First name must be at least 1 character long" }),
  lastName: z
    .string()
    .min(1, { message: "Last name must be at least 1 character long" }),
  phone: z
    .string()
    .min(1, { message: "Phone must be at least 1 character long" }),
  address: z
    .string()
    .min(1, { message: "Address must be at least 1 character long" }),
  bloodType: z
    .string()
    .min(1, { message: "Blood type must be at least 1 character long" }),
  birthday: z
    .string()
    .min(1, { message: "Birthday must be at least 1 character long" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

export type TCreateTeacherSchemaInputs = z.infer<typeof CreateTeacherSchema>;
