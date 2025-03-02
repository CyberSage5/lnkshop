import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  number: string
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ number, icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 shadow-xl flex-1">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-gray-800 rounded-full p-2">{icon}</div>
          <span className="text-5xl font-bold text-gray-800">{number}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

