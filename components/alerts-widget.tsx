"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react"

interface Alert {
  id: number
  type: string
  title: string
  description: string
  date: string
  priority: string
  icon: string
}

export default function AlertsWidget() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch("/api/alerts")
        if (response.ok) {
          const data = await response.json()
          setAlerts(data.alerts.slice(0, 3))
        }
      } catch (error) {
        console.error("Failed to fetch alerts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAlerts()
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "AlertCircle":
        return <AlertCircle className="w-5 h-5 text-blue-400" />
      case "CheckCircle":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "Clock":
        return <Clock className="w-5 h-5 text-yellow-400" />
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-green-400" />
      default:
        return <AlertCircle className="w-5 h-5 text-blue-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 border-red-500/20"
      case "medium":
        return "bg-yellow-500/10 border-yellow-500/20"
      default:
        return "bg-blue-500/10 border-blue-500/20"
    }
  }

  if (isLoading) {
    return <div className="text-slate-400">Loading alerts...</div>
  }

  return (
    <div className="space-y-2">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`flex items-start gap-3 p-3 rounded-lg border ${getPriorityColor(alert.priority)}`}
        >
          <div className="mt-0.5">{getIcon(alert.icon)}</div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">{alert.title}</p>
            <p className="text-slate-400 text-xs">{alert.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
