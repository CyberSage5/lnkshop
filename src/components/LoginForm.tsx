"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginFormValues) {
    setIsSubmitting(true)
    console.log("Login submitted:", data)

    // TODO: Implement actual login logic here

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md p-8 shadow-lg bg-gray-900 border-gray-800">
      <CardHeader className="space-y-1 p-0 mb-6">
        <CardTitle className="text-3xl font-bold text-center text-white">Log In to Lnkshop</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="bg-gray-800 text-white border-gray-700"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="bg-gray-800 text-white border-gray-700"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Logging In..." : "Log In"}
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-teal-400 hover:underline">
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

