import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Palette, Link, BarChart3 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      badge: "Step 1",
      icon: <UserPlus className="w-12 h-12 text-teal-500" />,
      title: "Create Your Profile",
      description:
        "Sign up and claim your unique Lnkshop URL in seconds. No coding required - just pick your username and start building.",
    },
    {
      badge: "Step 2",
      icon: <Palette className="w-12 h-12 text-orange-500" />,
      title: "Design Your Storefront",
      description: "Choose from our professionally designed layouts and customize colors to match your brand identity.",
    },
    {
      badge: "Step 3",
      icon: <Link className="w-12 h-12 text-teal-500" />,
      title: "Add Your Links",
      description:
        "Add your products, services, and content with our smart preview technology that automatically generates rich link previews.",
    },
    {
      badge: "Step 4",
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: "Track & Optimize",
      description:
        "Monitor your performance with detailed analytics and optimize your storefront for maximum conversions.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-orange-950/50 text-orange-500 border-orange-800/50">
            How It Works
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Start Selling in Minutes</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow our simple step-by-step process to transform your social bio into a powerful sales channel.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 relative group hover:border-teal-800 transition-colors"
            >
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-6 bg-teal-950/50 text-teal-400 border-teal-800/50">
                  {step.badge}
                </Badge>
                <div className="mb-6 transition-transform transform group-hover:scale-110">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
              <div className="absolute h-2 w-full bottom-0 left-0 bg-gradient-to-r from-teal-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

