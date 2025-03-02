"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type StatusType = "operational" | "degraded" | "partial_outage" | "major_outage" | "maintenance"

interface StatusIndicatorProps {
  status?: StatusType
}

export function StatusIndicator({ status = "operational" }: StatusIndicatorProps) {
  const [currentStatus, setCurrentStatus] = useState<StatusType>(status)

  // In a real app, you would fetch the status from an API
  useEffect(() => {
    // Simulate fetching status
    const fetchStatus = async () => {
      // This would be an API call in a real app
      // const response = await fetch('/api/status')
      // const data = await response.json()
      // setCurrentStatus(data.status)

      // For demo purposes, we'll just use the prop
      setCurrentStatus(status)
    }

    fetchStatus()

    // Set up polling every 60 seconds
    const interval = setInterval(fetchStatus, 60000)

    return () => clearInterval(interval)
  }, [status])

  const getStatusColor = () => {
    switch (currentStatus) {
      case "operational":
        return "bg-green-500"
      case "degraded":
        return "bg-yellow-500"
      case "partial_outage":
        return "bg-orange-500"
      case "major_outage":
        return "bg-red-500"
      case "maintenance":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = () => {
    switch (currentStatus) {
      case "operational":
        return "All Systems Operational"
      case "degraded":
        return "Performance Issues"
      case "partial_outage":
        return "Partial Outage"
      case "major_outage":
        return "Major Outage"
      case "maintenance":
        return "Maintenance in Progress"
      default:
        return "Status Unknown"
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-gray-700 px-3 py-1 cursor-pointer">
            <span className={`mr-1.5 h-2 w-2 rounded-full ${getStatusColor()} inline-block`}></span>
            <span className="text-sm text-gray-300">Status</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <div className="flex items-center">
            <span className={`mr-2 h-2 w-2 rounded-full ${getStatusColor()}`}></span>
            <span>{getStatusText()}</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            <a href="/status" className="underline">
              View status page
            </a>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

