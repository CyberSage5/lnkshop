"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md p-8 shadow-lg bg-gray-900 border-gray-800">
        <CardHeader className="space-y-1 p-0 mb-6">
          <CardTitle className="text-3xl font-bold text-center text-white">Verify Your Email</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex flex-col items-center">
          <Mail className="w-16 h-16 text-teal-500 mb-6" />
          <p className="text-gray-300 text-center mb-6">
            We've sent a verification link to <span className="font-semibold">{email}</span>. Please check your email
            and click the link to verify your account.
          </p>
          <Button href="/login" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            Continue to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

