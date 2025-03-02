import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StatusPage() {
  // In a real app, you would fetch this data from an API
  const services = [
    { name: "API", status: "operational", uptime: "99.99%" },
    { name: "Web App", status: "operational", uptime: "99.98%" },
    { name: "Dashboard", status: "operational", uptime: "99.95%" },
    { name: "Authentication", status: "operational", uptime: "99.99%" },
    { name: "Analytics", status: "operational", uptime: "99.97%" },
  ]

  const incidents = [
    {
      date: "2025-02-28",
      title: "API Performance Degradation",
      status: "Resolved",
      description:
        "We experienced a brief period of API performance degradation. The issue has been resolved and all systems are operating normally.",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">System Status</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
          <CardDescription>All systems are operational</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-6">
            <span className="h-4 w-4 rounded-full bg-green-500 mr-2"></span>
            <span className="text-lg font-medium">All Systems Operational</span>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uptime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.name}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{service.uptime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
          <CardDescription>Past incidents and maintenance</CardDescription>
        </CardHeader>
        <CardContent>
          {incidents.length > 0 ? (
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{incident.title}</h3>
                    <span className="text-sm text-gray-400">{incident.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm">{incident.status}</span>
                  </div>
                  <p className="text-sm text-gray-400">{incident.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No incidents reported in the last 90 days.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

