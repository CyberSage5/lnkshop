import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  isPro?: boolean
}

export function ServiceCard({ icon, title, description, isPro = false }: ServiceCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 shadow-xl relative">
      <CardContent className="p-6">
        {isPro && <Badge className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700">PRO</Badge>}
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

