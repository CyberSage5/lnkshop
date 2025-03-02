"use client"
import { z } from "zod"
import { LoginForm } from "@/components/LoginForm"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <LoginForm />
    </div>
  )
}

