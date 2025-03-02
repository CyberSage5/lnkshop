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
import { Checkbox } from "@/components/ui/checkbox"

const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
})

type SignupFormValues = z.infer<typeof signupSchema>

export function SignupForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      agreeToTerms: false,
    },
  })

  async function onSubmit(data: SignupFormValues) {
    setIsSubmitting(true)
    console.log("Form submitted:", data)

    // TODO: Implement actual signup logic here

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/onboarding")
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md p-8 shadow-lg bg-gray-900 border-gray-800">
      <CardHeader className="space-y-1 p-0 mb-6">
        <CardTitle className="text-3xl font-bold text-center text-white">Sign Up for Lnkshop</CardTitle>
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

            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="bg-gray-800 border-gray-700 data-[state=checked]:bg-teal-600"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-300">
                      I agree to the{" "}
                      <Link href="/terms" className="text-teal-400 hover:underline">
                        terms of service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-teal-400 hover:underline">
                        privacy policy
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Creating Account..." : "Create My Account"}
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-400 hover:underline">
            Log In
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

