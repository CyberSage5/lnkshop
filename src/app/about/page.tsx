import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">About Lnkshop</h1>
      <p className="text-xl text-gray-400 mb-12">
        Empowering creators and businesses to turn their social media presence into a powerful sales channel.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              At Lnkshop, we're on a mission to revolutionize the way creators and businesses connect with their
              audience and monetize their online presence. We believe that every link should be an opportunity, and
              every bio should be a storefront.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2023, Lnkshop was born out of the frustration of limited monetization options for social media
              creators. Our team of passionate developers and marketers came together to create a solution that empowers
              individuals and businesses to maximize their online potential.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-400">
              We're constantly pushing the boundaries of what's possible in link-in-bio technology.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">User-Centric</h3>
            <p className="text-gray-400">
              Our users' success is our success. We're dedicated to providing the best possible experience and support.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Transparency</h3>
            <p className="text-gray-400">
              We believe in open communication with our users and partners, fostering trust and collaboration.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
          Join the Lnkshop Community <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

