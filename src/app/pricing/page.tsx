import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Choose the plan that's right for you and start turning your social bio into a powerful sales channel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>For individuals just getting started</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-400 ml-2">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Up to 5 links</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Standard layouts</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Lnkshop.xyz/username URL</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-teal-800 relative">
          <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            POPULAR
          </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For creators and small businesses</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$12</span>
              <span className="text-gray-400 ml-2">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Unlimited links</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>All layouts and customization</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Custom domain support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Business</CardTitle>
            <CardDescription>For teams and businesses</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-400 ml-2">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Multiple storefronts</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>API access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                <span>Dedicated support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

