import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-xl text-gray-400 mb-12">
        Please read these terms of service carefully before using Lnkshop's services.
      </p>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-400 mb-4">
            By accessing or using Lnkshop's services, you agree to be bound by these Terms of Service and all applicable
            laws and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
          <p className="text-gray-400 mb-4">
            Lnkshop provides a platform for users to create customizable link-in-bio pages. We reserve the right to
            modify, suspend, or discontinue any part of the service at any time without notice.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
          <p className="text-gray-400 mb-4">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept
            responsibility for all activities that occur under your account.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">4. User Content</h2>
          <p className="text-gray-400 mb-4">
            You retain all rights to the content you post on Lnkshop. By posting content, you grant Lnkshop a
            non-exclusive, worldwide, royalty-free license to use, modify, and display the content in connection with
            our services.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
          <p className="text-gray-400 mb-4">You agree not to engage in any of the following prohibited activities:</p>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>Violating laws or regulations</li>
            <li>Infringing on intellectual property rights</li>
            <li>Transmitting harmful or malicious code</li>
            <li>Impersonating others</li>
            <li>Interfering with the proper functioning of the service</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-400 mb-4">
            Lnkshop shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of or inability to use the service.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-400 mb-4">
            We reserve the right to modify these Terms of Service at any time. We will notify users of any significant
            changes. Your continued use of Lnkshop after such modifications constitutes your acceptance of the updated
            terms.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

