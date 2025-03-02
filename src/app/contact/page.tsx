import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function ContactPage() {
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
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-xl text-gray-400 mb-12">
        We're here to help! Choose your preferred method of communication below.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Mail className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Email Us</h2>
            <p className="text-gray-400 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
            <Button onClick={handleEmailClick} className="bg-teal-600 hover:bg-teal-700 text-white">
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <MessageCircle className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">WhatsApp</h2>
            <p className="text-gray-400 mb-4">Chat with our support team instantly on WhatsApp.</p>
            <Button onClick={handleWhatsAppClick} className="bg-teal-600 hover:bg-teal-700 text-white">
              WhatsApp Us
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Phone className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
            <p className="text-gray-400 mb-4">Book a call with one of our product specialists.</p>
            <Button onClick={handleScheduleCall} className="bg-teal-600 hover:bg-teal-700 text-white">
              Schedule Call
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

