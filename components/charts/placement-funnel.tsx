"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const funnelData = [
  { stage: "Registered", count: 240, percentage: 100 },
  { stage: "Eligible", count: 200, percentage: 83 },
  { stage: "Applied", count: 180, percentage: 75 },
  { stage: "Shortlisted", count: 120, percentage: 50 },
  { stage: "Interviewed", count: 80, percentage: 33 },
  { stage: "Placed", count: 143, percentage: 60 },
]

export default function PlacementFunnel() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Placement Funnel</CardTitle>
        <CardDescription className="text-slate-400">Student progression through placement stages</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="stage" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
            <Bar dataKey="count" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
