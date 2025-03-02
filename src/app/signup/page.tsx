"use client"
import { z } from "zod"
import { SignupForm } from "@/components/SignupForm"

const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
})

type SignupFormValues = z.infer<typeof signupSchema>

export default function SignupPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <SignupForm />
    </div>
  )
}

