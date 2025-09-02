import { z } from "zod"

export const personalInfoSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    mobileNumber: z.string().min(1, "Mobile number is required"),
    nationality: z.string().min(1, "Nationality is required"),
    idType: z.string().min(1, "ID type is required"),
    idNumber: z.string().min(1, "ID number is required"),
})
