import * as z from "zod";


export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  // subject: z.string().min(1, { message: "Subject is required" }),
  category: z.string(),
  specialities: z.string(),
  practice_company: z
    .string()
    .min(8, { message: "Must be at least 8 characters" }),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid number" })
    .optional(),
  collection: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  date: z.string().optional(),
});

export const GetQuoteSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  practice_company: z
    .string()
    .min(8, { message: "Must be at least 8 characters" }),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid number" })
    .optional(),
  date: z.string().optional(),
});