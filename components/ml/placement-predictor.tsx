"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"

interface PredictionResult {
  placementProbability: number
  riskLevel: "low" | "medium" | "high"
  recommendations: string[]
  confidenceScore: number
}

export default function PlacementPredictor() {
  const [formData, setFormData] = useState({
    cgpa: 8.5,
    internships: 1,
    projects: 3,
    communicationSkill: 7,
    technicalSkill: 8,
    aptitudeScore: 75,
    previousPlacementExperience: false,
    skillsCount: 5,
    yearsOfExperience: 0,
  })

  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number.parseFloat(value) || value,
    }))
  }

  const handlePredict = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/ml/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setPrediction(data.prediction)
      }
    } catch (error) {
      console.error("Prediction failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-green-400"
      case "medium":
        return "text-yellow-400"
      case "high":
        return "text-red-400"
      default:
        return "text-slate-400"
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low":
        return <CheckCircle className="w-6 h-6 text-green-400" />
      case "medium":
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />
      case "high":
        return <AlertCircle className="w-6 h-6 text-red-400" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Student Profile</CardTitle>
            <CardDescription className="text-slate-400">Enter student details for prediction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-slate-300">CGPA</Label>
              <Input
                type="number"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleInputChange}
                min="0"
                max="10"
                step="0.1"
                className="mt-2 bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label className="text-slate-300">Internships</Label>
              <Input
                type="number"
                name="internships"
                value={formData.internships}
                onChange={handleInputChange}
                min="0"
                max="5"
                className="mt-2 bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label className="text-slate-300">Projects</Label>
              <Input
                type="number"
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                min="0"
                max="10"
                className="mt-2 bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label className="text-slate-300">Communication Skill (1-10)</Label>
              <Input
                type="number"
                name="communicationSkill"
                value={formData.communicationSkill}
                onChange={handleInputChange}
                min="1"
                max="10"
                className="mt-2 bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label className="text-slate-300">Technical Skill (1-10)</Label>
              <Input
                type="number"
                name="technicalSkill"
                value={formData.technicalSkill}
                onChange={handleInputChange}
                min="1"
                max="10"
                className="mt-2 bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label className="text-slate-300">Aptitude Score (0-100)</Label>
              <Input
                type="number"
                name="aptitudeScore"
                value={formData.aptitudeScore}
                onChange={handleInputChange}
                min="0"
                max="100"
                className="mt-2 bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="previousPlacementExperience"
                checked={formData.previousPlacementExperience}
                onChange={handleInputChange}
                className="w-4 h-4"
              />
              <Label className="text-slate-300">Previous Placement Experience</Label>
            </div>

            <Button onClick={handlePredict} disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
              {isLoading ? "Predicting..." : "Predict Placement"}
            </Button>
          </CardContent>
        </Card>

        {/* Prediction Result */}
        {prediction && (
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Prediction Result</CardTitle>
              <CardDescription className="text-slate-400">ML Model Analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Probability */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-slate-300">Placement Probability</Label>
                  <span className="text-2xl font-bold text-white">{prediction.placementProbability}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    style={{ width: `${prediction.placementProbability}%` }}
                  />
                </div>
              </div>

              {/* Risk Level */}
              <div>
                <Label className="text-slate-300 mb-2 block">Risk Level</Label>
                <div className="flex items-center gap-3">
                  {getRiskIcon(prediction.riskLevel)}
                  <span className={`text-lg font-bold capitalize ${getRiskColor(prediction.riskLevel)}`}>
                    {prediction.riskLevel}
                  </span>
                </div>
              </div>

              {/* Confidence */}
              <div>
                <Label className="text-slate-300">Model Confidence</Label>
                <p className="text-white font-bold mt-1">{Math.round(prediction.confidenceScore * 100)}%</p>
              </div>

              {/* Recommendations */}
              <div>
                <Label className="text-slate-300 mb-2 block">Recommendations</Label>
                <ul className="space-y-2">
                  {prediction.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
