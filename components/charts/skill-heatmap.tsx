"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillData = [
  { skill: "Python", demand: 95, proficiency: 85 },
  { skill: "React", demand: 88, proficiency: 78 },
  { skill: "Node.js", demand: 82, proficiency: 75 },
  { skill: "System Design", demand: 90, proficiency: 70 },
  { skill: "Databases", demand: 85, proficiency: 80 },
  { skill: "DevOps", demand: 75, proficiency: 65 },
  { skill: "AWS", demand: 80, proficiency: 72 },
  { skill: "Docker", demand: 78, proficiency: 68 },
]

function getHeatmapColor(value: number): string {
  if (value >= 90) return "bg-green-600"
  if (value >= 80) return "bg-green-500"
  if (value >= 70) return "bg-yellow-500"
  if (value >= 60) return "bg-orange-500"
  return "bg-red-500"
}

export default function SkillHeatmap() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Skill Demand vs Proficiency</CardTitle>
        <CardDescription className="text-slate-400">Market demand vs student proficiency levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {skillData.map((item) => (
            <div key={item.skill}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-slate-300">{item.skill}</span>
                <span className="text-xs text-slate-500">
                  Demand: {item.demand}% | Proficiency: {item.proficiency}%
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${getHeatmapColor(item.demand)}`} style={{ width: `${item.demand}%` }} />
                </div>
                <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${getHeatmapColor(item.proficiency)}`}
                    style={{ width: `${item.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
