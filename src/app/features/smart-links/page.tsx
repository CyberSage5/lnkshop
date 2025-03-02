import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, ExternalLink, Smartphone, Globe } from "lucide-react"

export default function SmartLinksPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Smart Links</h1>
      <p className="text-xl text-gray-400 mb-12">
        Transform your bio into a powerful sales channel with Lnkshop's Smart Links technology.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Link className="w-6 h-6 mr-2 text-teal-500" />
              Auto-Generated Previews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Our smart technology automatically generates rich previews for your links, including images, titles, and
              descriptions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ExternalLink className="w-6 h-6 mr-2 text-teal-500" />
              Customizable CTAs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Create eye-catching call-to-action buttons for each link to drive more conversions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="w-6 h-6 mr-2 text-teal-500" />
              Mobile Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              All links are optimized for mobile viewing, ensuring a seamless experience across all devices.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-6 h-6 mr-2 text-teal-500" />
              Global Link Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Easily manage and update all your links from a single, intuitive dashboard.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
          Start Using Smart Links
        </Button>
      </div>
    </div>
  )
}

