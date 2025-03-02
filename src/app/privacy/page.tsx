import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-xl text-gray-400 mb-12">
        At Lnkshop, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal
        information.
      </p>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-400 mb-4">
            We collect information you provide directly to us, such as when you create an account, use our services, or
            communicate with us. This may include:
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Content you upload to our platform</li>
            <li>Communications with us</li>
          </ul>
          <p className="text-gray-400">
            We also automatically collect certain information about your device and how you interact with our services.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-400 mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-400 mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal
            information. However, please note that no method of transmission over the Internet or method of electronic
            storage is 100% secure.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-400 mb-4">
            You have the right to access, correct, or delete your personal information. You may also have the right to
            object to or restrict certain types of processing. To exercise these rights, please contact us using the
            information provided at the end of this policy.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="text-gray-400 mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "Last updated" date at the top of this policy.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

