import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, BookOpen, MessageCircle, Mail, Phone } from "lucide-react"

export default function SupportPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@lnkshop.com"
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  const handleScheduleCall = () => {
    window.open("https://cal.com/terfajohn", "_blank")
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Support Center</h1>
      <p className="text-xl text-gray-400 mb-12">
        Find answers to your questions or get in touch with our support team.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <HelpCircle className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <p className="text-gray-400 mb-4">Find quick answers to common questions about Lnkshop.</p>
            <Button href="/faqs" className="bg-teal-600 hover:bg-teal-700 text-white">
              View FAQs
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <BookOpen className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Documentation</h2>
            <p className="text-gray-400 mb-4">Explore our comprehensive guides and tutorials.</p>
            <Button href="/docs" className="bg-teal-600 hover:bg-teal-700 text-white">
              Read Docs
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Mail className="w-12 h-12 text-teal-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Email Support</h3>
            <p className="text-gray-400 mb-4">Get help via email within 24 hours.</p>
            <Button onClick={handleEmailClick} className="bg-teal-600 hover:bg-teal-700 text-white">
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <MessageCircle className="w-12 h-12 text-teal-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">WhatsApp Support</h3>
            <p className="text-gray-400 mb-4">Chat with our support team on WhatsApp.</p>
            <Button onClick={handleWhatsAppClick} className="bg-teal-600 hover:bg-teal-700 text-white">
              WhatsApp Us
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Phone className="w-12 h-12 text-teal-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
            <p className="text-gray-400 mb-4">Book a call with our support team.</p>
            <Button onClick={handleScheduleCall} className="bg-teal-600 hover:bg-teal-700 text-white">
              Schedule Call
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

