"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from "recharts"

const companyData = [
  { metric: "Salary", Google: 95, Microsoft: 85, Amazon: 80, Meta: 90 },
  { metric: "Growth", Google: 90, Microsoft: 85, Amazon: 88, Meta: 92 },
  { metric: "Work-Life", Google: 75, Microsoft: 80, Amazon: 70, Meta: 78 },
  { metric: "Learning", Google: 95, Microsoft: 88, Amazon: 85, Meta: 90 },
  { metric: "Stability", Google: 95, Microsoft: 90, Amazon: 92, Meta: 85 },
]

export default function CompanyComparison() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Company Comparison</CardTitle>
        <CardDescription className="text-slate-400">Compare top companies across different metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={companyData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="metric" stroke="#94a3b8" />
            <PolarRadiusAxis stroke="#94a3b8" />
            <Radar name="Google" dataKey="Google" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.25} />
            <Radar name="Microsoft" dataKey="Microsoft" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} />
            <Radar name="Amazon" dataKey="Amazon" stroke="#ec4899" fill="#ec4899" fillOpacity={0.25} />
            <Radar name="Meta" dataKey="Meta" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.25} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
