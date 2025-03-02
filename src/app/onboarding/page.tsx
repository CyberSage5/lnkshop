"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, XCircle } from "lucide-react"

const usernameSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be at most 20 characters" })
    .regex(/^[a-zA-Z0-9_-]+$/, { message: "Username can only contain letters, numbers, underscores, and hyphens" })
    .refine((username) => username !== "testuser", { message: "Username is already taken" }),
})

type UsernameFormValues = z.infer<typeof usernameSchema>

export default function OnboardingPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSetUsername, setHasSetUsername] = useState(false)

  const form = useForm<UsernameFormValues>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  })

  useEffect(() => {
    // Check if the user has already set a username (dummy state for now)
    const checkUsername = async () => {
      // This would be replaced with a Supabase query in the future
      const hasUsername = localStorage.getItem("hasSetUsername") === "true"
      setHasSetUsername(hasUsername)
      if (hasUsername) {
        router.push("/dashboard")
      }
    }
    checkUsername()
  }, [router])

  async function onSubmit(data: UsernameFormValues) {
    setIsSubmitting(true)
    console.log("Username submitted:", data.username)

    // TODO: Implement Supabase username update
    // const { data: profile, error } = await supabase
    //   .from('profiles')
    //   .upsert({ username: data.username })

    // if (error) {
    //   console.error("Error updating username:", error.message)
    //   setIsSubmitting(false)
    //   return
    // }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      localStorage.setItem("hasSetUsername", "true")
      router.push("/dashboard")
    }, 1000)
  }

  if (hasSetUsername) {
    return null // This will prevent a flash of the onboarding page for users who have already set their username
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md p-8 shadow-lg bg-gray-900 border-gray-800">
        <CardHeader className="space-y-1 p-0 mb-6">
          <CardTitle className="text-3xl font-bold text-center text-white">Choose Your Username</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-300 text-center mb-6">This will be your public Lnkshop URL.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Username</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <span className="bg-gray-800 text-gray-300 px-3 py-2 text-sm border rounded-l-md border-r-0 border-gray-700">
                          lnkshop.xyz/
                        </span>
                        <Input
                          placeholder="username"
                          className="rounded-l-none bg-gray-800 text-white border-gray-700"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                    {field.value && !form.formState.errors.username && (
                      <div className="flex items-center mt-2 text-green-500">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">Username is available</span>
                      </div>
                    )}
                    {form.formState.errors.username && (
                      <div className="flex items-center mt-2 text-red-500">
                        <XCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">{form.formState.errors.username.message}</span>
                      </div>
                    )}
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Claim My Username"}
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center text-sm text-gray-400">
            This will be your public link: lnkshop.xyz/{form.watch("username") || "[username]"}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

