import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatusIndicator } from "@/components/status-indicator"
import { FeatureCard } from "@/components/feature-card"
import { ServiceCard } from "@/components/service-card"
import { SponsorSection } from "@/components/sponsor-section"
import { HowItWorks } from "@/components/how-it-works"
import {
  LayoutGrid,
  LineChart,
  Link2,
  Smartphone,
  Users,
  Target,
  ImageIcon,
  MousePointerClick,
  Heading1,
  Globe,
  Share2,
  Mail,
  Search,
} from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center bg-black text-white">
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
          <StatusIndicator status="operational" />
        </div>

        <Badge variant="outline" className="mb-6 bg-teal-950 text-teal-400 border-teal-800 px-3 py-1">
          <span className="mr-1 h-2 w-2 rounded-full bg-teal-400 inline-block"></span> Now in Beta
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
          Experience the <span className="text-teal-400">Lnk</span>
          <span className="text-orange-500">shop</span> revolution
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          We're more than just a link-in-bio tool, we're a complete sales aggregation platform for creators and
          businesses. Get access to exclusive features, analytics, and support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            Get Started <span className="ml-2">→</span>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            View Demo
          </Button>
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:w-1/2">
            <h2 className="text-teal-500 mb-4 text-lg font-medium">Benefits</h2>
            <h3 className="text-4xl font-bold mb-6">Your Shortcut to Success</h3>
            <p className="text-gray-400 text-lg">
              Transform your social media bio into a powerful sales channel. Connect your audience directly to your
              products, services, and content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <FeatureCard
                number="01"
                icon={<LayoutGrid className="h-6 w-6 text-teal-500" />}
                title="Build Brand Trust"
                description="Create a professional storefront that builds credibility and trust with your audience."
              />

              <FeatureCard
                number="02"
                icon={<LineChart className="h-6 w-6 text-orange-500" />}
                title="More Leads"
                description="Convert your social media followers into customers with a seamless shopping experience."
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <FeatureCard
                number="03"
                icon={<Link2 className="h-6 w-6 text-teal-500" />}
                title="Higher Conversions"
                description="Optimize your links with smart previews and analytics to increase conversion rates."
              />

              <FeatureCard
                number="04"
                icon={<Target className="h-6 w-6 text-orange-500" />}
                title="Test Marketing Ideas"
                description="Easily A/B test different layouts and designs to find what works best for your audience."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-orange-500 mb-4 text-lg font-medium">Features</h2>
          <h3 className="text-4xl font-bold mb-6">What Makes Us Different</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Lnkshop combines powerful features with an intuitive interface to help you create the perfect storefront for
            your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center mb-6">
              <Smartphone className="h-6 w-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold mb-4">Mobile Friendly</h4>
            <p className="text-gray-400">
              Responsive design ensures your storefront looks great on any device, from desktop to mobile.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold mb-4">Social Proof</h4>
            <p className="text-gray-400">
              Showcase customer reviews and testimonials to build trust and credibility with your audience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold mb-4">Targeted Content</h4>
            <p className="text-gray-400">
              Customize your storefront based on where your visitors are coming from for a personalized experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center mb-6">
              <ImageIcon className="h-6 w-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold mb-4">Strong Visuals</h4>
            <p className="text-gray-400">
              Auto-generate rich previews of your products with images and descriptions pulled directly from your links.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center mb-6">
              <MousePointerClick className="h-6 w-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold mb-4">Clear CTA</h4>
            <p className="text-gray-400">
              Guide your visitors with clear call-to-action buttons that drive conversions and sales.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-950 flex items-center justify-center mb-6">
              <Heading1 className="h-6 w-6 text-teal-500" />
            </div>
            <h4 className="text-xl font-bold mb-4">Clear Headline</h4>
            <p className="text-gray-400">
              Communicate your value proposition clearly with customizable headlines and descriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-teal-500 mb-4 text-lg font-medium">Services</h2>
          <h3 className="text-4xl font-bold mb-6">Grow Your Business</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From marketing and sales to operations and strategy, we have the expertise to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ServiceCard
            icon={<Globe className="h-6 w-6 text-teal-500" />}
            title="Custom Domain Integration"
            description="Use your own domain for a professional and branded storefront experience."
          />

          <ServiceCard
            icon={<Share2 className="h-6 w-6 text-teal-500" />}
            title="Social Media Integrations"
            description="Connect your social media accounts for seamless content sharing and analytics."
          />

          <ServiceCard
            icon={<Mail className="h-6 w-6 text-teal-500" />}
            title="Email Marketing Integrations"
            description="Capture leads and connect with your favorite email marketing platforms."
          />

          <ServiceCard
            icon={<Search className="h-6 w-6 text-teal-500" />}
            title="SEO Optimization"
            isPro={true}
            description="Improve your visibility in search engines with built-in SEO tools."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-900 to-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Bio?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and businesses who are already using Lnkshop to turn their social media followers
            into customers.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            Get Started for Free
          </Button>
          <p className="mt-4 text-sm text-gray-400">No credit card required. 14-day free trial.</p>
        </div>
      </section>
    </main>
  )
}

