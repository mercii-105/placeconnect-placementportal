"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Star } from "lucide-react"

const recommendations = [
  {
    id: 1,
    company: "Google",
    matchScore: 92,
    reason: "Your CGPA and skills match perfectly",
    openings: 5,
    avgSalary: "₹30 LPA",
    tags: ["AI/ML", "Python", "System Design"],
  },
  {
    id: 2,
    company: "Microsoft",
    matchScore: 88,
    reason: "Strong match for Cloud Solutions role",
    openings: 3,
    avgSalary: "₹26 LPA",
    tags: ["Azure", "DevOps", "Cloud"],
  },
  {
    id: 3,
    company: "Amazon",
    matchScore: 85,
    reason: "Backend development skills align well",
    openings: 7,
    avgSalary: "₹24 LPA",
    tags: ["Java", "Databases", "Scalability"],
  },
  {
    id: 4,
    company: "Meta",
    matchScore: 80,
    reason: "Frontend expertise matches requirements",
    openings: 2,
    avgSalary: "₹28 LPA",
    tags: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 5,
    company: "Apple",
    matchScore: 78,
    reason: "Mobile development background relevant",
    openings: 4,
    avgSalary: "₹29 LPA",
    tags: ["iOS", "Swift", "Mobile"],
  },
]

export default function RecommendationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Recommended Companies</h1>
        <p className="text-slate-400 mt-1">Companies that match your profile and skills</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-white">{rec.company}</CardTitle>
                  <CardDescription className="text-slate-400">{rec.openings} openings available</CardDescription>
                </div>
                <div className="flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-lg">
                  <TrendingUp size={16} className="text-green-400" />
                  <span className="text-green-400 font-bold">{rec.matchScore}%</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-slate-300 mb-2">{rec.reason}</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Matching Skills</p>
                <div className="flex flex-wrap gap-2">
                  {rec.tags.map((tag) => (
                    <Badge key={tag} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div>
                  <p className="text-xs text-slate-400">Avg Salary</p>
                  <p className="text-white font-bold">{rec.avgSalary}</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Star size={16} className="mr-2" />
                  View Jobs
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
