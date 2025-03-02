import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Layout, Image, Type } from "lucide-react"

export default function CustomDesignPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Custom Design</h1>
      <p className="text-xl text-gray-400 mb-12">
        Create a unique and branded experience for your audience with Lnkshop's powerful design tools.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="w-6 h-6 mr-2 text-teal-500" />
              Custom Color Schemes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Choose from a wide range of color palettes or create your own to match your brand identity.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Layout className="w-6 h-6 mr-2 text-teal-500" />
              Flexible Layouts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Select from multiple layout options including grid, list, and carousel to showcase your content
              effectively.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Image className="w-6 h-6 mr-2 text-teal-500" />
              Custom Backgrounds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Upload your own background images or choose from our library of professional designs.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Type className="w-6 h-6 mr-2 text-teal-500" />
              Typography Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Customize fonts and text styles to create a cohesive and professional look.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
          Start Designing
        </Button>
      </div>
    </div>
  )
}

