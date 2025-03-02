import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PieChart, TrendingUp, Users } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Powerful Analytics</h1>
      <p className="text-xl text-gray-400 mb-12">
        Gain valuable insights into your audience and optimize your performance with Lnkshop's advanced analytics.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="w-6 h-6 mr-2 text-teal-500" />
              Click-through Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Track the performance of each link with detailed click-through rate analytics.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-6 h-6 mr-2 text-teal-500" />
              Audience Demographics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Understand your audience better with insights into their demographics and interests.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-teal-500" />
              Conversion Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Set up custom conversion goals and track your success rates over time.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-6 h-6 mr-2 text-teal-500" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">
              Identify which platforms and campaigns are driving the most traffic to your Lnkshop page.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
          Explore Analytics Features
        </Button>
      </div>
    </div>
  )
}

