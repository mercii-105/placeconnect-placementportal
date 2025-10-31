"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const timelineData = [
  { week: "Week 1", applications: 5, interviews: 0, offers: 0 },
  { week: "Week 2", applications: 12, interviews: 2, offers: 0 },
  { week: "Week 3", applications: 18, interviews: 5, offers: 1 },
  { week: "Week 4", applications: 25, interviews: 8, offers: 2 },
  { week: "Week 5", applications: 30, interviews: 10, offers: 3 },
  { week: "Week 6", applications: 35, interviews: 12, offers: 4 },
]

export default function TimelineChart() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Placement Timeline</CardTitle>
        <CardDescription className="text-slate-400">
          Weekly progression of applications, interviews, and offers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="week" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
            <Area
              type="monotone"
              dataKey="applications"
              stackId="1"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.6}
            />
            <Area type="monotone" dataKey="interviews" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            <Area type="monotone" dataKey="offers" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
