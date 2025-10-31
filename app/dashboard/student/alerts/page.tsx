"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "placement-drive",
    title: "Google Placement Drive",
    description: "Registration opens on December 15, 2024",
    date: "2024-12-15",
    priority: "high",
    icon: AlertCircle,
  },
  {
    id: 2,
    type: "interview",
    title: "Interview Scheduled",
    description: "Microsoft - Technical Round at 2:00 PM",
    date: "2024-12-10",
    priority: "high",
    icon: Clock,
  },
  {
    id: 3,
    type: "performance",
    title: "CGPA Improved",
    description: "Your CGPA increased to 8.5 this semester",
    date: "2024-12-08",
    priority: "medium",
    icon: TrendingUp,
  },
  {
    id: 4,
    type: "application",
    title: "Application Accepted",
    description: "Amazon has accepted your application for Backend Developer role",
    date: "2024-12-05",
    priority: "medium",
    icon: CheckCircle,
  },
  {
    id: 5,
    type: "placement-drive",
    title: "Meta Placement Drive",
    description: "Registration closes on December 12, 2024",
    date: "2024-12-12",
    priority: "high",
    icon: AlertCircle,
  },
]

export default function AlertsPage() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Alerts & Notifications</h1>
        <p className="text-slate-400 mt-1">Stay updated with placement drives and interviews</p>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon
          return (
            <Card key={alert.id} className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold">{alert.title}</h3>
                      <Badge className={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{alert.description}</p>
                    <p className="text-xs text-slate-500">{alert.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
