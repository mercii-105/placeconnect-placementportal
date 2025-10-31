"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"

interface Recommendation {
  id: number
  name: string
  matchScore: number
  openings: number
  avgSalary: string
  tags: string[]
}

export default function RecommendationWidget() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("/api/recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentCGPA: 8.5,
            studentSkills: ["Python", "React", "Node.js"],
            studentSpecialization: "AI/ML",
          }),
        })

        if (response.ok) {
          const data = await response.json()
          setRecommendations(
            data.recommendations.map((rec: any) => ({
              id: rec.id,
              name: rec.name,
              matchScore: rec.matchScore,
              openings: 5,
              avgSalary: `₹${rec.avgSalary} LPA`,
              tags: rec.requiredSkills.slice(0, 2),
            })),
          )
        }
      } catch (error) {
        console.error("Failed to fetch recommendations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecommendations()
  }, [])

  if (isLoading) {
    return <div className="text-slate-400">Loading recommendations...</div>
  }

  return (
    <div className="space-y-3">
      {recommendations.map((rec) => (
        <div key={rec.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
          <div>
            <p className="text-white font-medium">{rec.name}</p>
            <p className="text-xs text-slate-400">{rec.openings} openings</p>
          </div>
          <div className="text-right">
            <p className="text-green-400 font-bold flex items-center gap-1">
              <TrendingUp size={14} />
              {rec.matchScore}%
            </p>
            <p className="text-xs text-slate-400">Match</p>
          </div>
        </div>
      ))}
    </div>
  )
}
