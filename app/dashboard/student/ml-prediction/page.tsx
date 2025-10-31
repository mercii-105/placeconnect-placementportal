"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PlacementPredictor from "@/components/ml/placement-predictor"

export default function MLPredictionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Placement Prediction</h1>
        <p className="text-slate-400 mt-1">AI-powered placement probability prediction</p>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">How It Works</CardTitle>
          <CardDescription className="text-slate-400">Our ML model analyzes your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-white font-bold mb-2">1. Profile Analysis</p>
              <p className="text-slate-400 text-sm">The model analyzes your CGPA, skills, internships, and projects</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-white font-bold mb-2">2. Pattern Recognition</p>
              <p className="text-slate-400 text-sm">
                Identifies patterns from historical placement data of similar students
              </p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-white font-bold mb-2">3. Prediction</p>
              <p className="text-slate-400 text-sm">Generates placement probability and personalized recommendations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <PlacementPredictor />
    </div>
  )
}
