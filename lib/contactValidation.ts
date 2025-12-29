import { z } from "zod";
import validator from "validator";

// Sanitization function to remove HTML tags and trim whitespace
export function sanitizeInput(input: string): string {
  if (!input) return "";
  // Remove HTML tags
  const withoutHtml = input.replace(/<[^>]*>/g, "");
  // Trim whitespace
  return withoutHtml.trim();
}

// Sanitize phone number (keep only digits, +, -, spaces, and parentheses)
export function sanitizePhoneNumber(phone: string): string {
  if (!phone) return "";
  return phone.replace(/[^\d+\-\s()]/g, "").trim();
}

// Contact form validation schema
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .transform(sanitizeInput)
    .refine((val) => val.length > 0, "Name is required"),

  emailAddress: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email must not exceed 254 characters")
    .transform(sanitizeInput)
    .refine((val) => validator.isEmail(val), "Invalid email address"),

  companyName: z
    .string()
    .max(200, "Company name must not exceed 200 characters")
    .transform(sanitizeInput)
    .optional()
    .default(""),

  phoneNumber: z
    .string()
    .max(20, "Phone number must not exceed 20 characters")
    .transform(sanitizePhoneNumber)
    .optional()
    .default(""),

  orderType: z
    .enum(["custom", "bulk", "sample", "general"], {
      errorMap: () => ({ message: "Please select a valid order type" }),
    }),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters")
    .transform(sanitizeInput)
    .refine((val) => val.length >= 10, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
