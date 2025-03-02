import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Content Creators",
      description: "Monetize your audience by showcasing your products, services, and affiliate links in one place.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Showcase digital products",
        "Link to merchandise",
        "Promote affiliate products",
        "Track click-through rates",
      ],
    },
    {
      title: "Small Businesses",
      description: "Create a mobile-friendly storefront that connects your social media followers to your products.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Showcase your product catalog",
        "Link to your online store",
        "Promote special offers",
        "Track customer engagement",
      ],
    },
    {
      title: "Freelancers",
      description: "Showcase your portfolio, services, and testimonials to attract new clients.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Link to your portfolio",
        "Showcase client testimonials",
        "Offer service packages",
        "Schedule consultations",
      ],
    },
    {
      title: "Musicians & Artists",
      description: "Connect fans to your music, merchandise, tour dates, and more.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Link to streaming platforms",
        "Sell merchandise",
        "Promote upcoming events",
        "Share exclusive content",
      ],
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Use Cases</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover how different creators and businesses are using Lnkshop to grow their audience and increase sales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {useCases.map((useCase, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
            <div className="aspect-video relative">
              <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{useCase.title}</CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {useCase.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-5 w-5 text-teal-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to create your own Lnkshop?</h2>
        <p className="text-gray-400 mb-6">
          Join thousands of creators and businesses who are already using Lnkshop to grow their audience and increase
          sales.
        </p>
        <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
          Get Started for Free
        </Button>
      </div>
    </div>
  )
}

