import { z } from "zod";
export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  service: z.enum(["Photography", "Videography", "Both", "Other"]),
  projectType: z.enum(["Wedding", "Event", "Commercial", "Brand Content", "Portrait", "Other"]),
  date: z
    .string()
    .max(10)
    .refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), "Please enter a valid date."),
  location: z.string().trim().max(200),
  budget: z.string().trim().max(100),
  details: z
    .string()
    .trim()
    .min(1, "Please tell us about your project.")
    .max(5000, "Please keep project details under 5,000 characters."),
});
export function prepareEnquiry(data: unknown) {
  const result = enquirySchema.safeParse(data);
  return result.success
    ? { valid: true as const, sent: false as const, data: result.data }
    : { valid: false as const, sent: false as const, errors: result.error.flatten().fieldErrors };
}
