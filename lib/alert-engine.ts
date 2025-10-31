export interface Alert {
  id: number
  type: string
  title: string
  description: string
  date: string
  priority: "high" | "medium" | "low"
  icon: string
}

export interface StudentMetrics {
  cgpa: number
  applications: number
  interviews: number
  placed: boolean
  minPlacementCGPA: number
}

export function generateAlerts(metrics: StudentMetrics): Alert[] {
  const alerts: Alert[] = []

  // Low CGPA alert
  if (metrics.cgpa < metrics.minPlacementCGPA) {
    alerts.push({
      id: 1,
      type: "low-performance",
      title: "Low Performance Alert",
      description: `Your CGPA (${metrics.cgpa}) is below the placement eligibility threshold (${metrics.minPlacementCGPA})`,
      date: new Date().toISOString().split("T")[0],
      priority: "high",
      icon: "AlertCircle",
    })
  }

  // No applications alert
  if (metrics.applications === 0) {
    alerts.push({
      id: 2,
      type: "no-applications",
      title: "No Applications Yet",
      description: "You have not applied to any positions. Start applying to companies!",
      date: new Date().toISOString().split("T")[0],
      priority: "medium",
      icon: "AlertCircle",
    })
  }

  // Placement success alert
  if (metrics.placed) {
    alerts.push({
      id: 3,
      type: "placement-success",
      title: "Congratulations!",
      description: "You have been successfully placed!",
      date: new Date().toISOString().split("T")[0],
      priority: "high",
      icon: "CheckCircle",
    })
  }

  return alerts
}
